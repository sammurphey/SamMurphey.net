import React, {Component} from "react";

class ImageElement extends Component {
	state = {
		alt: "",
		path: "test",
		title: ""
	}
	componentDidMount () {
		if (this.props.ref_id) {
			console.log(this.props.ref_id)
			this.getData(this.props.ref_id)
		}
	}
	componentDidUpdate(prevProps) {
		const _props = this.props;

		if (_props.ref_id && _props.ref_id !== prevProps.ref_id) {
			console.log(_props.ref_id)
			this.getData(_props.ref_id);
		}
	}
	getData (ref_id) {
		fetch("https://sammurphey.net/api/index.php?table=imgs&id=" + ref_id)
			.then(res => res.json())
				.then((data) => {
					console.log(data);
					var img = data[0];
					this.setState ({
						alt: img.alt || img.title,
						path: img.path,
						title: img.title || img.alt
					})
				});
	}
	handleImgLoad (e) {
		e.target.classList.add("loaded");
	}
	render () {
		return (
			<div className="img_container">
				{this.props.children(this.state)}
			</div>
		);
	}
};


export default ImageElement;
