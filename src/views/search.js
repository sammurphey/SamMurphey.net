import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";

class SearchPage extends Component {
	render () {
		return (
			<article id="search_results" className="page-enter">
				<ScrollToTop />
				<Intro title="Search Results" />
			</article>
		);
	}
}

export default SearchPage;
