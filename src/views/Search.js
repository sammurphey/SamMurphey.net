import React, { Component } from "react";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

class SearchView extends Component {
	state = {
		anim: "page-enter",
		title: "Search",
		endpoint: false
	}
	componentDidMount () {
		var url = window.location.pathname.replace("/search/","");
		this.setState({
			"endpoint": "https://sammurphey.net/api/index.php?search=" + url + "&public=true&sort_by=date&sort_dir=DESC",
			"title": "Search: " + url
		});
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	render () {
		return (
			<div className="search_view">
				<article className={this.state.anim}>
					<Intro title={this.state.title} view="overview" />

					{this.state.endpoint && <Grid endpoint={this.state.endpoint} data_type="search" />}

				</article>
				<Footer />
			</div>
		)
	}
}
export default SearchView;
