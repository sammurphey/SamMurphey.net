import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class ArtPage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php?category=art&sort_by=date&sort_dir=DESC";
		return (
			<article id="art_page" className={this.state.anim} key="art_page">
				<ScrollToTop />
				<Intro title="Art" />

				<Grid endpoint={url} />
			</article>
		);
	}
}

export default ArtPage;
