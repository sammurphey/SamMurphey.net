import React, { Component } from "react";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

class OverviewView extends Component {
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
		if ((this.props.table && this.props.ref_id) || this.props.category === "all") {
			this.getData();
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.table !== prevProps.table || _props.ref_id !== prevProps.ref_id || _props.category !== prevProps.category) {
			this.getData();
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	getData () {
		console.log("getting overview data");
		if (this.props.category !== "all") {
			var url = "https://sammurphey.net/api/index.php?table=" + this.props.table + "&id=" + this.props.ref_id + "&public=true";
			console.log(url);
			fetch(url)
				.then(res => res.json())
				.then((data) => {
					this.setState({"data": data[0]});
					console.log(this.state.data);
					this.updateGrid(data[0]);
				});
		} else {
			var data = {
				description: "My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work.",
				category: "all"
			}
			this.setState({"data": data});
			this.setState({"gridUrl": "https://sammurphey.net/api/index.php?view=overview&public=true&sort_by=date&sort_dir=DESC"});
		}
	}
	updateGrid (data) {
		var url = "https://sammurphey.net/api/index.php?category=" + data.category  + "&view=overview&public=true&sort_by=date&sort_dir=DESC";
		console.log(url);
		this.setState({"gridUrl": url});
		switch(data.category) {
			case "store":
				this.setState({
					"gridTitle": "All Products",
					"gridDesc": [
						"Browse items from all of the subcategories above.",
						"They are arranged with the newest items first.",
						"Tap on a tile to learn more about it."
					]
				});
				break;
			default:
				this.setState({
					"gridTitle": "Recent " + data.title + " Projects",
					"gridDesc": [
						"Browse work from all of the subcategories above.",
						"They are displayed in reverse-chronological order, with the most recent work first.",
						"Tap on a tile to learn more about it."
					]
				});
				break;
		}
	}
	render () {
		return (
			<div className="category_view">
				<article className={this.state.anim}>
					<Intro title={this.props.title} data={this.state.data} view="overview" />
					{this.state.data && <div className="has_data">
						{this.state.data.category && <CategoryPreview category={this.state.data.category} />}
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
export default OverviewView;
