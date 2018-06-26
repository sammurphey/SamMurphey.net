import React, {Component} from "react";

class ImageElement extends Component {
	state = {
		alt: "",
		id: "",
		path: "test",
		container_style: {},
		image_style: {},
		img_shape: "",
		img_pos: "",
		override_shape: "",
		title: ""
	}
	componentDidMount () {
		if (this.props.ref_id) {
			this.setState({
				id: this.props.ref_id,
				override_shape: this.props.override_shape
			});
			this.getData(this.props.ref_id);
		}
	}
	componentDidUpdate(prevProps) {
		const _props = this.props;

		if (_props.ref_id && _props.ref_id !== prevProps.ref_id) {
			this.setState({id: this.props.ref_id});
			this.getData(_props.ref_id);
		}
	}
	getData (ref_id) {
		fetch("https://sammurphey.net/api/index.php?table=imgs&id=" + ref_id)
			.then(res => res.json())
				.then((data) => {
					var img = data[0],
						cs  = {},
						is  = {},
						shape = "";
					switch (img.position) {
						case "center":
							cs = {justifyContent: "center", alignItems: "center"};
							break;
						case "left":
							cs = {flexDirection: "row"};
							break;
						case "right":
							cs = {flexDirection: "row-reverse"};
							break;
						case "top":
							cs = {flexDirection: "column"};
							break;
						case "bottom":
							cs = {flexDirection: "column-reverse"};
							break;
					}
					if (this.state.override_shape) {
						shape = this.state.override_shape;
					} else {
						shape = img.shape;
					}
					switch (shape) {
						case "square":
						case "wide":
							is = {height: 100 + "%", width: "auto"};
							break;
						case "tall":
							is = {height: "auto", width: 100 + "%"};
							break;
					}
					this.setState ({
						alt: img.alt || img.title,
						path: img.path,
						title: img.title || img.alt,
						container_style: cs,
						img_style: is,
						img_shape: shape,
						img_pos: img.position
					})
				});
	}
	handleImgLoad (e) {
		e.target.parentNode.classList.add("loaded");
	}
	render () {
		return (
			<div className="img_container" data-id={this.state.id} data-shape={this.state.img_shape} data-pos={this.state.img_pos} style={this.state.container_style}>
				<img alt={this.state.alt} src={this.state.path} style={this.state.img_style} title={this.state.title} onLoad={this.handleImgLoad}/>
			</div>
		);
	}
};


export default ImageElement;
