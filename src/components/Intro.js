import React, { Component } from "react";
import {Link} from "react-router-dom";
import ImageElement from "./ImageElement";
import MusicPlayer from "./MusicPlayer";

class Intro extends Component {
	state = {
		title: "",
		data: [],
		alias: [],
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

						{/* music */}
							{this.state.data.category === "music" && <div className="music_data">
								{this.state.data.alias && <p className="subtitle">
									By: <Link to="#">{this.state.data.alias}</Link>
								</p>}
								{this.props.now_playing && <MusicPlayer now_playing={this.props.now_playing}/>}

								<div className="info_sidebar">
									<p className="subtitle">
										Released: <span>{this.state.data.date}</span>
										<br/>
										Publisher: {this.state.data.label && <a href="#">{this.state.data.label}</a>}{!this.state.data.label && <span>Self Released</span>}
									</p>
								</div>
							</div>}

						{/* code */}
							{this.state.data.category === "code" && <div className="code_data">
								{this.state.data.description && <p className="subtitle">
									Project: <span>{this.state.data.description}</span>
								</p>}
								{this.state.data.role && <p className="subtitle">
									My Role: <span>{this.state.data.role}</span>
								</p>}
								{this.state.data.client && <p className="subtitle">
									Client: <span>{this.state.data.client}</span>
								</p>}
								{this.state.data.tech_stack && <p className="subtitle">
									Tech Stack:
									{!Array.isArray(this.state.data.tech_stack) && <span>{this.state.data.tech_stack}</span>}
									{Array.isArray(this.state.data.tech_stack) && <span>
										{this.state.data.tech_stack.map((lang, k) => {
											var delimiter = ", ";
											if (k + 1 === this.state.data.tech_stack.length) {
												var delimiter = "";
											}
											return (
												<Link to={"/search/" + lang}>{lang}{delimiter}</Link>
											)
										})}
									</span>}
								</p>}

								<div className="info_sidebar">
									<p className="subtitle">
										Shipped: <span>{this.state.data.date}</span>
									</p>
								</div>
							</div>}
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
