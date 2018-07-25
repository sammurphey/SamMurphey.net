import React, { Component } from "react";
import {Redirect, Link} from "react-router-dom";
import ImageElement from "./ImageElement";
import MusicPlayer from "./MusicPlayer";

class Intro extends Component {
	state = {
		title: "",
		data: [],
		alias: [],
		hasImg: false,
		currentSearch: "",
		nextSearch: false
	}
	componentDidMount () {
		document.getElementById("main").scrollTo(0,0);
		if (this.props.title) {
			this.setState({"title": this.props.title});
		}
		if (this.props.data) {
			this.setState({"data": this.props.data});
		}
		if (this.props.currentSearch) {
			this.setState({"currentSearch": this.props.currentSearch});
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
		if (_props.currentSearch !== prevProps.currentSearch) {
			this.setState({"currentSearch": _props.currentSearch});
		}
		if (_props.view !== prevProps.view) {
			if (_props.view === "project" || _props.view === "details") {
				this.setState({"hasImg": true});
			} else {
				this.setState({"hasImg": false});
			}
		}
	}
	submitSearch () {
		var str = document.getElementById("search_box").value;
		this.setState({"nextSearch": str});
	}
	render () {
		return (
			<section className="intro">
				<div className="panel">
					<div className="corner"></div>
					<h1>{this.props.title}</h1>
					{this.state.data && <div className="has_data">

						{(this.state.view === "overview" || this.state.view === "subcategory") && <div className="default_view">
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
									By: <Link to={"/search/" + this.state.data.alias}>{this.state.data.alias}</Link>
								</p>}
								{this.props.current_song && <MusicPlayer current_song={this.props.current_song} view={this.state.view} song_view={this.props.song_view} />}

								<div className="info_sidebar">
									<p className="subtitle">
										Released: <span>{this.state.data.date}</span>
										<br/>
										Publisher: {this.state.data.label && <span>{this.state.data.label}</span>}{!this.state.data.label && <span>Self Released</span>}
									</p>
								</div>
							</div>}

							{/* code */}
							{this.state.data.category === "code" && <div className="code_data">
								{this.state.data.description && <p className="subtitle">
									Project: <span>{this.state.data.description}</span>
								</p>}
								{this.state.data.client && <p className="subtitle">
									Client: <span>{this.state.data.client}</span>
								</p>}
								{this.state.data.role && <p className="subtitle">
									My Role: <span>{this.state.data.role}</span>
								</p>}
								{this.state.data.tech_stack && <p className="subtitle">
									Tech Stack: {!Array.isArray(this.state.data.tech_stack) && <span>{this.state.data.tech_stack}</span>}
									{Array.isArray(this.state.data.tech_stack) && <span>
										{this.state.data.tech_stack.map((lang, k) => {
											var delimiter = ", ";
											if (k + 1 === this.state.data.tech_stack.length) {
												delimiter = "";
											}
											return (
												<span>
													<Link key={k} to={"/search/" + lang}>{lang}</Link>
													{delimiter}
												</span>
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

							{/* other */}
							{this.state.data.category !== "music" && this.state.data.category !== "code" && <div className="other_data">
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
								<div className="info_sidebar">
									<p className="subtitle">
										Date: <span>{this.state.data.date}</span>
									</p>
								</div>
							</div>}
						</div>}


						{/*search*/}
						{this.state.view === "search" && <div className="search_view">
							<div className="panel_wrapper">

								<input type="text" name="search_box" id="search_box" placeholder={this.state.currentSearch} ref={this.input} />

								<input type="submit" name="submit_search" id="submit_search" className="btn" value="Go"  onClick={((e) => this.submitSearch(e))} />

							</div>
							{this.state.nextSearch && <Redirect
					          to={{
					            pathname: "/search/" + this.state.nextSearch
							}} />}
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
