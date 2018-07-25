import React, { Component } from "react";
import Intro from "../components/Intro";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

class SearchView extends Component {
	state = {
		anim: "page-enter",
		currentSearch: "",
		endpoint: false
	}
	componentDidMount () {
		var url = window.location.pathname.replace("/search/","");
		this.setState({
			"endpoint": "https://sammurphey.net/api/index.php?search=" + url + "&public=true&sort_by=date&sort_dir=DESC",
			"currentSearch": url
		});
	}
	componentDidUpdate (prevProps) {
		const _props = this.props
		if (_props !== prevProps) {
			var url = window.location.pathname.replace("/search","");
			url = url.replace("/", "")
			this.setState({"currentSearch": url});
			if (url.length) {
				this.setState({
					"endpoint": "https://sammurphey.net/api/index.php?search=" + url + "&public=true&sort_by=date&sort_dir=DESC"
				});
			}
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	render () {
		return (
			<div className="search_view">
				<article className={this.state.anim}>
					<Intro title="Search" view="search" currentSearch={this.state.currentSearch} />

					{this.state.endpoint && <Grid endpoint={this.state.endpoint} data_type="search" />}

				</article>
				<Footer />
			</div>
		)
	}
}
export default SearchView;
