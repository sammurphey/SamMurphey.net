import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
////////////////////////
//  componetns  //////
////////////////////
class Intro extends Component {
	render () {
		return (
			<section className="intro panel">
				<Corner />
				<h1>{this.props.title}</h1>
			</section>
		);
	}
}

class Overview extends Component {
	render () {
		return (
			<section id="overview" className="grid">
				<section className="panel"><p>Result #1</p></section>
				<section className="panel"><p>Result #2</p></section>
				<section className="panel"><p>Result #3</p></section>
				<section className="panel"><p>Result #4</p></section>
				<section className="panel"><p>Result #5</p></section>
				<section className="panel"><p>Result #6</p></section>
				<section className="panel"><p>Result #7</p></section>
				<section className="panel"><p>Result #8</p></section>
				<section className="panel"><p>Result #9</p></section>
			</section>
		);
	}
}
class Sidebar extends Component {
	render () {
		var page = "http://127.0.0.1:3000/";
		return (
			<aside id="sidebar">
				<div id="console">
					<h4>Homepage</h4>
					<p>{page}</p>
					<p>Last Updated: 3/11/2017</p>
				</div>
				<img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fsammurphey.net&size=64x64&bgcolor=989898" alt="QR Code" title="Share" />
			</aside>
		);
	}
}
class Corner extends Component {
	render () {
		return (
			<div className="corner"></div>
		)
	}
}
//////////////////
//  pages //////
//////////////
class SearchResults extends Component {
	render () {
		return (
			<article id="search_results">
				<Intro title="Search Results" />
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
							<article id="homepage">
								<Intro title="Hello World"/>
								<Overview category="all"/>
							</article>
						)}/>
						<Route path="/search" component={SearchResults} />
						<Route path="/:category" component ={Category} />
						<Route component={NoMatch} />
					</Switch>
				<Sidebar />
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
