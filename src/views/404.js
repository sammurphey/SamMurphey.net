import React, { Component } from "react";
import Intro from "../components/Intro";

class NoMatch extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	render () {
		return (
			<article id="no_match" className={this.state.anim}>
				<Intro title="404" description="The requested page could not be found." />
			</article>
		)
	}
}

export default NoMatch;
