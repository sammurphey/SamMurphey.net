import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class StorePage extends Component {
	render () {
		return (
			<article id="store_page">
				<ScrollToTop />
				<Intro title="Store" />
				<Grid items="store" />
			</article>
		);
	}
}

export default StorePage;
