import React, { Component } from "react";
class Intro extends Component {
	state = {}
	componentDidMount () {
		document.getElementById("main").scrollTo(0,0);
	}
	render () {
		return (
			<section className="intro panel">
				<div className="corner"></div>
				<h1>{this.props.title}</h1>
				{this.props.data && <div>
					{this.props.data.description &&
					Array.isArray(this.props.data.description) &&
					<p>
						{this.props.data.description.map((string, k) => {
							return (
								<span key={k}>
									{string}<br/>
								</span>
							);
						})}
					</p>}
					{this.props.data.description &&
					!Array.isArray(this.props.data.description) &&
					<p>
						{this.props.data.description}
					</p>}
				</div>}
			</section>
		);
	}
}

export default Intro;
