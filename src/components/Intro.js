import React, { Component } from "react";

class Intro extends Component {
	render () {
		return (
			<section className="intro panel">
				<div className="corner"></div>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
			</section>
		);
	}
}

export default Intro;
