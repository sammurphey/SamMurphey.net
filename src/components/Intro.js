import React, { Component } from "react";
import ImageElement from "./ImageElement";
class Intro extends Component {
	state = {
		title: "",
		data: []
	}
	componentDidMount () {
		document.getElementById("main").scrollTo(0,0);
		if (this.props.title) {
			this.setState({"title": this.props.title});
		}
		if (this.props.data) {
			this.setState({"data": this.props.data});
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
	}
	render () {
		return (
			<section className="intro">
				<div className="panel">
					<div className="corner"></div>
					<h1>{this.props.title}</h1>
					{this.state.data && <div className="has_data">
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
				</div>
				{(this.props.view === "project" || this.props.view === "details") && <div className="hero_img panel">
					{this.state.data.cover_img && <ImageElement ref_id={this.state.data.cover_img} />}
				</div>}
			</section>
		);
	}
}

export default Intro;
