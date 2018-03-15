import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";
import Delayed from "react-delayed";
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
				<Link to={`/search`} className="panel">
					<p>Result #1</p>
				</Link>
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
		return (
			<aside id="sidebar">
				<div className="contents">
					<div id="console">
						<p>Last Updated: <span>3/11/2017</span></p>
						<p>Contact: <a href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a></p>
					</div>
					<img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fsammurphey.net&size=64x64&bgcolor=989898" alt="QR Code" title="Share" />
				</div>
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
class HomePage extends Component {
	constructor () {
		super();
		this.state = {
			class: ""
		}
	}
	componentWillUnmount () {
		this.setState({class: "exit"});
	}
	render () {
		return (
    			<article id="homepage" key="homepage" className={this.state.class}>
					<Intro title="Hello World"/>
					<Overview category="all"/>
				</article>
		);
	}
}
class SearchResults extends Component {
	constructor () {
		super();
		this.state = {
			class: ""
		}
	}
	componentWillUnmount () {
		this.setState({class: "exit"});
	}
	render () {
		return (
			<article id="search_results" key="search_results" className={this.state.class}>
				<Intro title="Search Results" />
			</article>
		);
	}
}


class Main extends Component {
	render () {
		return (
			<main id="main" className="container">
				<Delayed mounted={true} mountAfter={1000} unmountAfter={1000}>
					<Switch>
						<Route exact={true} path="/" component={HomePage}/>
						<Route path="/search" component={SearchResults} />
						<Route path="/:category" component ={Category} />
						<Route component={NoMatch} />
					</Switch>
				</Delayed>
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
