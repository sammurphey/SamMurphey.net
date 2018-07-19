import React, { Component } from "react";

class TabGroup extends Component {
	state = {
		data: []
	}
	componentDidMount () {
		if (this.props.data) {
			this.setState({"data": this.props.data});
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.data !== prevProps.data) {
			this.setState({"data": _props.data});
		}
	}
	render () {
		return(
			<div className="album_info panel_wrapper">
				<div class="tabs panel_wrapper">
					<div className="panel tab">Now Playing</div>
					<div className="panel tab selected">About</div>
					<div className="panel tab">Music Videos</div>
					<div className="panel tab">All Photos</div>
				</div>
				<div id="now_playing_tab" class="panel tab_view">
					<h2>Now Playing</h2>
				</div>
				<div id="about_tab" class="panel tab_view selected">
					<h2>About</h2>
					{this.state.data.description &&
					Array.isArray(this.state.data.description) &&
					<p>
						{this.state.data.description.map((string, k) => {
							return (
								<span key={k}>
									{string}<br/>
								</span>
							);
						})}
					</p>}
					{this.state.data.description &&
					!Array.isArray(this.state.data.description) &&
					<p>
						{this.state.data.description}
					</p>}
				</div>
				<div id="videos_tab" class="panel tab_view">
					<h2>About</h2>
				</div>
				<div id="photos_tab" class="panel tab_view">
					<h2>About</h2>
				</div>
			</div>
		)
	}
}
export default TabGroup;
