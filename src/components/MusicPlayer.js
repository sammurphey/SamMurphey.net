import React, { Component } from "react";
import ImageElement from "./ImageElement";

class MusicPlayer extends Component {
	state = {
		song: []
	}
	componentDidMount () {
		if (this.props.now_playing) {
			this.getSong(this.props.now_playing);
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.now_playing !== prevProps.now_playing) {
			this.getSong(_props.now_playing);
		}
	}
	getSong (name) {
		var url = "https://sammurphey.net/api/index.php?table=songs&name=" + name + "&public=true";
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
			<div className="music_player panel_wrapper">
				<div className="track_art">
					<div className="art_wrapper">
						{this.state.song.cover_img && <ImageElement ref_id={this.state.song.cover_img} />}
					</div>
				</div>
				<div className="track_playback panel_wrapper">
					<div id="connected_panel" className="panel">
						{this.state.song.title && <h3 className="track_title">{this.state.song.title}</h3>}
					</div>
					<div className="panel">
						<button className="btn chip play_btn">
							{this.state.isPlaying && <svg height="32px" width="32px" />}
							{!this.state.isPlaying && <svg height="32px" width="32px" />}
						</button>
					</div>
				</div>
			</div>
		)
	}
}
export default MusicPlayer;
