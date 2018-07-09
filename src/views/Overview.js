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
		gridUrl: false,
		subcategories: []
	}
	componentDidMount () {
		//this.getData();
	}
	componentDidUpdate (prevProps) {
		//const _props = this.props;
		//this.getData();
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	render () {
		return (
			<div id="category_view">
				<article id={this.props.name} className={this.state.anim}>
					<Intro title={this.props.title} description={this.props.description} />
					{this.props.category && <CategoryPreview category={this.props.category} />}
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
				</article>
				<Footer />
			</div>
		)
	}
}
export default OverviewView;
