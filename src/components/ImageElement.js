import React, {Component} from "react";

class ImageElement extends Component {
	state = {
		alt: "",
		id: "",
		container_style: {},
		img_style: {},
		shape: "",
		pos: "",
		override_shape: "",
		title: "",
		color: "",
		src: false,
		src_set: ""
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
		fetch("https://api.sammurphey.net/v2/index.php?table=imgs&id=" + ref_id)
			.then(res => res.json())
				.then((data) => {
					var img = data[0],
						base = "https://cdn.sammurphey.net/v2/",
						i, src, src_set = "",
						cs  = {},
						is  = {},
						shape = "";

					// PATHS
					src = base + img.path + "." + img.ext;
					for (i = 0; i < img.sizes; i += 1) {
						var new_path = base + img.path,
							tmp_size = i + 1,
							new_size;
						if (tmp_size < 7) {
							new_size = tmp_size * 100;
						} else if (tmp_size < 14) {
							new_size = tmp_size * 200;
						} else {
							new_size = tmp_size * 300;
						}
						src_set += new_path + "__" + new_size + "px." + img.ext + " " + new_size + "w, ";
						if (i + 1 === img.sizes) {
							src_set += new_path + "." + img.ext + " " + img.original_size + "w";
						}
					}
					// POSITION
					switch (img.position) {
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
						case "center":
						default:
							cs = {justifyContent: "center", alignItems: "center"};
							break;
					}

					// SHAPE OVERRIDE CHECK
					if (this.state.override_shape) {
						shape = this.state.override_shape;
					} else {
						shape = img.shape;
					}
					// ACTUALL SHAPE
					switch (shape) {
						case "tall":
							is = {height: "auto", width: 100 + "%"};
							break;
							case "square":
							case "wide":
							default:
								is = {height: 100 + "%", width: "auto"};
								break;
					}

					// COMMIT RESULTS
					this.setState ({
						alt: img.alt || img.title,
						title: img.title || img.alt,
						color: img.color,
						container_style: cs,
						src: src,
						src_set: src_set,
						img_style: is,
						shape: shape,
						ext: img.ext,
						pos: img.position
					})
				});
	}
	handleImgLoad (e) {
		e.target.parentNode.classList.add("loaded");
	}
	render () {
		return (
			<div className="img_container" data-id={this.state.id} data-shape={this.state.img_shape} data-pos={this.state.img_pos} style={this.state.container_style}>
				{this.state.src && this.state.src_set && <img alt={this.state.alt} src={this.state.src} srcSet={this.state.src_set} style={this.state.img_style} title={this.state.title} onLoad={this.handleImgLoad}/>}
				{this.state.ext === "mp4" && <video src={this.state.src}/>}
			</div>
		);
	}
};


export default ImageElement;
