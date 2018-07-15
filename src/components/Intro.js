import React, { Component } from "react";
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
			<section className="intro panel">
				<div className="corner"></div>
				<h1>{this.props.title}</h1>
				{this.state.data && <div>
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
			</section>
		);
	}
}

export default Intro;
