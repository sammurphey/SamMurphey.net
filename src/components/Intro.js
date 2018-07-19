import React, { Component } from "react";
import ImageElement from "./ImageElement";
class Intro extends Component {
	state = {
		title: "",
		data: [],
		hasImg: false
	}
	componentDidMount () {
		document.getElementById("main").scrollTo(0,0);
		if (this.props.title) {
			this.setState({"title": this.props.title});
		}
		if (this.props.data) {
			this.setState({"data": this.props.data});
		}
		if (this.props.view) {
			this.setState({"view": this.props.view});
			if (this.props.view === "project" || this.props.view === "details") {
				this.setState({"hasImg": true});
			}
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.title !== prevProps.title) {
			this.setState({"title": _props.title});
		}
		if (_props.data !== prevProps.data) {
			this.setState({"data": _props.data});
		}
		if (_props.view !== prevProps.view) {
			if (_props.view === "project" || _props.view === "details") {
				this.setState({"hasImg": true});
			} else {
				this.setState({"hasImg": false});
			}
		}
	}
	render () {
		return (
			<section className="intro">
				<div className="panel">
					<div className="corner"></div>
					<h1>{this.props.title}</h1>
					{this.state.data && <div className="has_data">

						{(this.state.view === "overview" || this.state.view == "subcategory") && <div className="default_view">
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
						</div>}

						{(this.state.view === "project" || this.state.view === "details") && <div className="info_view">

							{this.state.data.category === "music" && <div className="music_data">
								<p className="subtitle">By: <a href="#">{this.state.data.alias}</a></p>
							</div>}

							<div className="info_sidebar">
								{this.state.data.category === "music" && <div className="music_sidebar">
									<p className="subtitle">
										Released: <span>{this.state.data.date}</span>
										<br/>
										Publisher: {this.state.data.label && <a href="#">{this.state.data.label}</a>}{!this.state.data.label && <span>Self Released</span>}
									</p>
								</div>}
							</div>
						</div>}

					</div>}
				</div>
				{this.state.hasImg && <div className="hero_img panel">
					{this.state.data.cover_img && <ImageElement ref_id={this.state.data.cover_img} />}
				</div>}
			</section>
		);
	}
}

export default Intro;
