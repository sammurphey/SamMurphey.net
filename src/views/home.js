import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

class HomePage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php";
		return (
    			<article id="homepage" className={this.state.anim} key="homepage">
					<ScrollToTop />
					<Intro title="Hello World"/>
					<Grid endpoint={url} />
				</article>
		);
	}
}



export default HomePage;
