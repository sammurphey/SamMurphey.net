import React, { Component } from "react";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class CodePage extends Component {
	render () {
		return (
			<article id="code_page">
				<Intro title="Code" />
				<Grid items="code" />
			</article>
		);
	}
}

export default CodePage;
