import React, { Component } from "react";
import {Link} from "react-router-dom";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class HomePage extends Component {
	render () {
		return (
    			<article id="homepage" key="homepage">
					<Intro title="Hello World"/>
					<Grid items="home" />
				</article>
		);
	}
}

export default HomePage;
