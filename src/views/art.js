import React, { Component } from "react";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class ArtPage extends Component {
	render () {
		return (
			<article id="art_page">
				<Intro title="Art" />
				<Grid items="art" />
			</article>
		);
	}
}

export default ArtPage;
