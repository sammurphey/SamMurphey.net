import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class MusicPage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php?category=music&view=overview&sort_by=date&sort_dir=DESC";
		return (
			<article id="music_page" className={this.state.anim} key="music_page">
				<ScrollToTop />
				<Intro title="Music" />

				<Grid endpoint={url} />
			</article>
		);
	}
}

export default MusicPage;
