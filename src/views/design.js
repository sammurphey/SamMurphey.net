import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class DesignPage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php?category=design&sort_by=date&sort_dir=DESC";
		return (
			<article id="design_page" className={this.state.anim} key="design_page">
				<ScrollToTop />
				<Intro title="Design" />

				<Grid endpoint={url} />
			</article>
		);
	}
}

export default DesignPage;
