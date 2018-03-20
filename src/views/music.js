import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class MusicPage extends Component {
	render () {
		return (
			<article id="music_page">
				<ScrollToTop />
				<Intro title="Music" />
				<Grid items="music" />
			</article>
		);
	}
}

export default MusicPage;
