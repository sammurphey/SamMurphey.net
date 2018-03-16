import React, { Component } from "react";
import Intro from "../components/Intro";

class SearchPage extends Component {
	render () {
		return (
			<article id="search_results">
				<Intro title="Search Results" />
			</article>
		);
	}
}

export default SearchPage;
