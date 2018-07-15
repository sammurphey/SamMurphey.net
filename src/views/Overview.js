import React, { Component } from "react";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

class OverviewView extends Component {
	state = {
		anim: "page-enter",
		gridTitle: false,
		gridDesc: false,
		data: []
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
		console.log("getting overview data")
		if (this.props.category === "all") {
			var arr = {
					description: "My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work.",
					category: "all"
			}
			this.setState({"data": arr});
		} else {
			var url = "https://sammurphey.net/api/index.php?table=" + this.props.table + "&id=" + this.props.ref_id + "&public=true";
			console.log(url);
			fetch(url)
				.then(res => res.json())
					.then((data) => {
						this.setState({"data": data[0]});
						console.log(this.state.data);
					})
		}
	}
	render () {
		return (
			<div className="category_view">
				<article className={this.state.anim}>
					<Intro title={this.props.title} data={this.state.data} />
					{this.state.data && <div>
						{this.state.data.category && <CategoryPreview category={this.state.data.category} />}
						{this.state.gridTitle && <div className="panel">
							<h2>{this.state.gridTitle}</h2>
							{this.state.gridDesc && <p>
								{this.state.gridDesc.map((string, k) => {
									return (
										<span key={k}>
											{string}<br/>
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
