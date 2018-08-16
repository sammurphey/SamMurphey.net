import React, { Component } from "react";

class TabGroup extends Component {
	state = {
		data: [],
		tabs: [],
		pages: [],
		song: [],
		active_tab: 1
	}
	componentDidMount () {
		if (this.props.data) {
			this.setState({"data": this.props.data});
			this.getTabs(this.props.data);
		}
		if (this.props.now_playing) {
			this.getSong(this.props.now_playing);
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.data !== prevProps.data) {
			this.setState({"data": _props.data});
			this.getTabs(_props.data);
		}
		if (_props.now_playing !== prevProps.now_playing) {
			this.getSong(_props.now_playing);
		}
	}
	getTabs (data) {
		var tabs = ["About"];
		console.log("getting tabs");
		if (data) {
			if (data.category === "music") {
				console.log("is music");
				if (data.song_ids) {
					tabs.unshift("Now Playing");
				}
				if (data.category) {
					tabs.push("Music Videos");
				}
				if (data.adtl_imgs) {
					tabs.push("All Photos");
				}
				if (data.merch) {
					tabs.push("Merch")
				}

			}
		}
		this.setState({"tabs": tabs});
	}
	getSong (name) {
		console.log("getting song...")
		var url = "https://api.sammurphey.net/index.php?table=songs&name=" + name + "&public=true";
		fetch(url)
			.then(res => res.json())
				.then((data) => {
					data = data[0];
					if (data.description) {
						if (data.description.charAt(0) === "[") {
							data.description = JSON.parse(data.description);
						}
					}
					if (data.keywords) {
						data.keywords = JSON.parse(data.keywords);
					}
					this.setState({"song": data});
				})
	}
	render () {
		return(
			<div className="album_info panel_wrapper">
				<div className="tabs panel_wrapper">
					{this.state.tabs.map((tab, k) => {
						var c = "";
						if (k === 1) {
							c = " selected";
						}
						return (
							<div key={k} className={"panel tab" + c}>{tab}</div>
						)
					})}
				</div>
					{this.state.tabs.map((page, k) => {
						var c = "";
						if (k === 1) {
							c = " selected";
						}
						return (
							<div key={k} className={"panel tab_page" + c}>
								{page === "now_playing" && <div>
									{this.state.song && <div>
										<h2>{this.state.song.title}</h2>
										{this.state.song.description &&
										Array.isArray(this.state.song.description) &&
										<p>
											{this.state.song.description.map((string, k) => {
												return (
													<span key={k}>
														{string}<br/>
													</span>
												);
											})}
										</p>}
										{this.state.song.description &&
										!Array.isArray(this.state.song.description) &&
										<p>
											{this.state.song.description}
										</p>}
									</div>}

								</div>}
							</div>
						)
					})}
			</div>
		)
	}
}
export default TabGroup;
