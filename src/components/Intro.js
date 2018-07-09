import React, { Component } from "react";
class Intro extends Component {
	componentDidMount () {
		document.getElementById("main").scrollTo(0,0);
	}
	render () {
		return (
			<section className="intro panel">
				<div className="corner"></div>
				<h1>{this.props.title}</h1>
				{Array.isArray(this.props.description) && <p>
					{this.props.description.map((string, k) => {
						return (
							<span key={k}>
								{string}<br/>
							</span>
						);
					})}
				</p>}
				{this.props.description && !Array.isArray(this.props.description) && <p>{this.props.description}</p>}
			</section>
		);
	}
}

export default Intro;
