import React, { Component } from "react";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

class SubcategoryView extends Component {
	state = {
		anim: "page-enter",
		gridUrl: false,
		gridTitle: "All Projects",
		gridDesc: [
			"Browse work from all of the categories above.",
			"They are organized with the most recent projects first.",
			"Tap on a tile to learn more about it."
		],
		data: {
			description: false,
			category: false
		}
	}
	componentDidMount () {
		if ((this.props.table && this.props.ref_id)) {
			this.getData();
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.table !== prevProps.table || _props.ref_id !== prevProps.ref_id) {
			this.getData();
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	getData () {
		console.log("getting overview data");
		var url = "https://sammurphey.net/api/index.php?table=" + this.props.table + "&id=" + this.props.ref_id + "&public=true";
		console.log(url);
		fetch(url)
			.then(res => res.json())
			.then((data) => {
				this.setState({"data": data[0]});
				console.log(this.state.data);
				this.updateGrid(data[0]);
			});
	}
	updateGrid (data) {
		var url = "https://sammurphey.net/api/index.php?subcategory=" + data.name  + "&public=true&sort_by=date&sort_dir=DESC";
		switch(data.name) {
			// aliases
			case "silent-synthesis":
			case "shtml":
			case "sunnli5hh-t":
			case "syntactic-sugar":
			case "emma-o-yama":
			case "ikea-at-midnight":
				url += "&view=overview";
				this.setState({
					"gridTitle": "All " + data.title + " Releases",
					"gridDesc": [
						"Listen to the latest singles, EPs, and full-length albums from " + data.title + "."
					]
				});
				break;
			default:
				this.setState({
					"gridTitle": "Recent " + data.title,
					"gridDesc": [
						"Browse the work.",
					]
				});
				break;
		}

		console.log(url);
		this.setState({"gridUrl": url});
	}
	render () {
		return (
			<div className="subcategory_view">
				<article className={this.state.anim}>
					<Intro title={this.props.title} data={this.state.data} view="subcategory" />
					{this.state.data && <div className="has_data">
						{this.state.gridTitle && <div className="panel">
							<h2>{this.state.gridTitle}</h2>
							{this.state.gridDesc && <p> {this.state.gridDesc.map((string, k) => {
									return (
										<span key={k}>				{string}<br/>
										</span>
									);
								})}
							</p>}
						</div>}
						{this.state.gridUrl && <Grid endpoint={this.state.gridUrl} />}
					</div>}
				</article>
				<Footer />
			</div>
		)
	}
}
export default SubcategoryView;
