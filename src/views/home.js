import React, { Component } from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class HomePage extends Component {
	render () {

		return (
    			<article id="homepage" key="homepage">
					<ScrollToTop />
					<Intro title="Hello World"/>
					<Grid />
				</article>
		);
	}
}



export default HomePage;
