import React, { Component } from "react";
import {Link} from "react-router-dom";
import ImageElement from "./ImageElement";

class MusicPlayer extends Component {
	state = {
		song: []
	}
	componentDidMount () {
		if (this.props.current_song) {
			this.getSong(this.props.current_song);
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.current_song !== prevProps.current_song) {
			this.getSong(_props.current_song);
		}
	}
	getSong (name) {
		var url = "https://api.sammurphey.net/v2/index.php?table=songs&name=" + name + "&public=true";
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
				{this.props.song_view !== "single" && <div className="track_art">
					<div className="art_wrapper">
						{this.state.song.cover_img && <ImageElement ref_id={this.state.song.cover_img} />}
					</div>
				</div>}
				<div className="track_playback panel_wrapper">
					<div id="connected_panel" className="panel">
						{this.state.song.title && <Link to={this.state.song.url}>
							<h3 className="track_title">
								{this.state.song.title}
							</h3>
						</Link>}
					</div>
					<div className="panel">
						<button className="btn chip play_btn">
							{this.state.isPlaying && <svg height="32px" width="32px" />}
							{!this.state.isPlaying && <svg height="32px" width="32px" />}
						</button>
						<div class="stream_link">
							<p>
								Streamable tracks coming soon...
								{this.state.song.file && <span><br/>
									Listen here: <a href={this.state.song.file} rel="noopener noreferrer" target="_blank">{this.state.song.file}</a>
								</span>}
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default MusicPlayer;
