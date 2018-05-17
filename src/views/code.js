import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class CodePage extends Component {
	render () {
		return (
			<article id="code_page" className="page-enter">
				<ScrollToTop />
				<Intro title="Code" />
				<Grid items="code" />
			</article>
		);
	}
}

export default CodePage;
