import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

class Intro extends Component {
	render () {
		return (
			<section id="intro" className="panel">
				<h1>Hello World</h1>
			</section>
		);
	}
}

class Search extends Component {
	render () {
		return (
			<article id="search">
				<h1>Search Results</h1>
			</article>
		);
	}
}

class Overview extends Component {
	render () {
		return (
			<article id="overview">
				<p>Loop through: {this.props.category}</p>
			</article>
		);
	}
}

class Main extends Component {
	render () {
		return (
			<main id="main" className="container">
				<Switch>
					<Route exact={true} path="/" render={() => (
						<div id="homepage">
							<Intro />
							<Overview category="all"/>
						</div>
					)}/>
					<Route path="/search" component={Search} />
					<Route path="/:category" component ={Category} />
					<Route component={NoMatch} />
				</Switch>
			</main>
		);
	}
}

const Category = ({ match }) => (
	<div>
		<Route path={match.url + ""} render={() => (
			<Overview category="this.props.category" />
		)} />
		<Route path={match.url + "/silentsynthesis"} component={SilentSynthesis} />
	</div>
)
const SilentSynthesis = ({ match }) => (
	<div>SS</div>
)
const Code = ({ match }) => (
	<div>

	</div>
)
const Art = ({ match }) => (
	<div></div>
)
const Store = ({ match }) => (
	<div></div>
)

const NoMatch = () => (
	<div id="no_match">
		<h1>404</h1>
	</div>
)

export default Main;
