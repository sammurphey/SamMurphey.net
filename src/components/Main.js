import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";
import HomePage from "../views/home";
import SearchPage from "../views/search";
import MusicPage from "../views/music";
import CodePage from "../views/code";
import ArtPage from "../views/art";
import StorePage from "../views/store";

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Main extends Component {
	render () {
		return (
			<main id="main" className="container">
					<Switch>
						<Route exact={true} path="/" component={HomePage}/>
						<Route path="/search" component={SearchPage} />
						<Route path="/music" component={MusicPage} />
						<Route path="/code" component={CodePage} />
						<Route path="/art" component={ArtPage} />
						<Route path="/store" component={StorePage} />
						<Route component={NoMatch} />
					</Switch>
			</main>
		);
	}
}

const NoMatch = () => (
	<div id="no_match">
		<h1>404</h1>
	</div>
)

export default Main;
