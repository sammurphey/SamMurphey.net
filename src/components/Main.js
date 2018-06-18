import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../views/home";
import SearchPage from "../views/search";
import MusicPage from "../views/music";
import CodePage from "../views/code";
import ArtPage from "../views/art";
import DesignPage from "../views/design";
import StorePage from "../views/store";
import Gallery from "../views/gallery";
import Footer from "./Footer";
//

import {Link} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";
import ImageElement from "../components/ImageElement";
import InlinePanel from "../components/InlinePanel";
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class CategoryOverview extends Component {
	render () {
		return (
			<section id={this.props.category && "-overview"}>
				<div className="panel">
					<h2>{this.props.category}</h2>
					<p>I make experimental music under lots of different aliases.</p>
				</div>
				<div className="panel_container">
					<InlinePanel url="/music/silent-synthesis" title="Silent Synthesis" bg="484" profile="99"/>
					<InlinePanel url="/music/shtml" title="SHTML" bg="480" profile="241" />
					<InlinePanel url="/music/sunnli5hh/t" title="Sunnli5hh/t" bg="118" profile="476" />
					<InlinePanel url="/music/syntactic-sugar" title="Syntactic Sugar" bg="289" profile="271"/>
					<InlinePanel url="/music/ikeaatmidnight" title="Ikea@Midnight" bg="485" profile="66" />
					<InlinePanel url="/music/emma-o-yama" title="Emma O'Yama" bg="63" profile="193"/>
				</div>
			</section>
		)
	}
}

class OverviewView extends Component {
	render () {
		var url = "https://sammurphey.net/api/index.php?view=overview&sort_by=date&sort_dir=DESC";
		return (
			<div id="overview_view">
				<article id="homepage_intro">
					<ScrollToTop />
					<Intro title="" description="" />
					<CategoryOverview category="music" />
					<CategoryOverview category="code" />
					<CategoryOverview category="art" />
					<CategoryOverview category="design" />
					<CategoryOverview category="store" />
				</article>
				<article id="homepage_grid">
					<h1>All Projects</h1>
					<Grid endpoint={url} />
				</article>
			</div>
		)
	}
}

class DetailView extends Component {

}

class Main extends Component {
	render () {
		return (
			<main id="main" className="container">
					<Switch>
						<Route exact={true} path="/" component={OverviewView} />
						<Route path="/search" component={SearchPage} />
						<Route path="/music" component={MusicPage} />
						<Route path="/code" component={CodePage} />
						<Route path="/art" component={ArtPage} />
						<Route path="/design" component={DesignPage} />
						<Route path="/store" component={StorePage} />
						<Route path="/gallery" component={Gallery} />
						<Route component={NoMatch} />
					</Switch>
					<Footer />
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
