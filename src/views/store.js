import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class StorePage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php?category=store&sort_by=date&sort_dir=DESC";
		return (
			<article id="store_page" className={this.state.anim} key="store_page">
				<ScrollToTop />
				<Intro title="Store" />

				<Grid endpoint={url} />
			</article>
		);
	}
}

export default StorePage;
