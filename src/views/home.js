import React, { Component } from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class HomePage extends Component {
	constructor () {
		super();
		this.state = {
			anim: "page-enter"
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	render () {

		return (
    			<article id="homepage" className={this.state.anim} key="homepage">
					<ScrollToTop />
					<Intro title="Hello World"/>
					<Grid />
				</article>
		);
	}
}



export default HomePage;
