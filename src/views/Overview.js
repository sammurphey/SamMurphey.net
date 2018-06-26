import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

import SubcategoryView from "../views/Subcategory";
import NoMatch from "../views/404";

class OverviewView extends Component {
	state = {
		anim: "page-enter",
		gridTitle: false,
		gridDesc: false,
		gridUrl: false,
		subcategories: []
	}
	componentDidMount () {
		if (this.props.category) {
			this.getData();
		}
		if (this.props.subcategories) {
			this.getRoutes(this.props.subcategories);
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.category !== prevProps.category) {
			this.getData();
		}
		if (_props.subcategories !== prevProps.subcategories) {
			this.getRoutes(_props.subcategories);
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	getData () {
		var _gridUrl = false,
			_table = false;
		if (this.props.category) {
			if (this.props.category === "all") {
				_gridUrl = "https://sammurphey.net/api/index.php?view=overview&sort_by=date&sort_dir=DESC";
				this.setState({
					gridTitle: "All Projects",
					gridDesc:[
						"Browse work from all of the categories above.",
						"They are organized with the most recent projects first.",
						"Tap on a tile to learn more about it."
					],
				});
			} else {
				_gridUrl = "https://sammurphey.net/api/index.php";
				if (this.props.category == "music") {
					_gridUrl += "?view=overview&";
				} else {
					_gridUrl += "?";
				}
				_gridUrl += "category=" + this.props.category + "&sort_by=date&sort_dir=DESC";
				if (this.props.title === "Store") {
					this.setState({
						gridTitle: "All Products",
						gridDesc: [
							"Browse items from all of the subcategories above.",
							"They are arranged with the newest items first.",
							"Tap on a tile to learn more about it."
						]
					});
				} else {
					this.setState({
						gridTitle: "Recent " + this.props.title + " Projects",
						gridDesc: [
							"Browse work from all of the subcategories above.",
							"They are displayed in reverse-chronological order, with the most recent work first.",
							"Tap on a tile to learn more about it."
						]
					});
				}
			}
		}
		this.setState({gridUrl: _gridUrl});
	}
	getRoutes (table) {
		fetch("https://sammurphey.net/api/index.php?table=" + table + "&public=true")
			.then(res => res.json())
				.then((data) => {
					console.log(data);
					this.setState({
						subcategories: data
					})
				})
	}
	render () {
		return (
			<div id="category_view">
				<Switch>
					<Route exact={true} path={this.props.url} render={() => (
						<article id={this.props.name} className={this.state.anim}>
							<Intro title={this.props.title} description={this.props.description} />
							{this.props.category && <CategoryPreview category={this.props.category} />}
							{this.state.gridTitle && <div className="panel">
								<h2>{this.state.gridTitle}</h2>
								{this.state.gridDesc && <p>
									{this.state.gridDesc.map((string, k) => {
										return (
											<span key="k">
												{string}<br/>
											</span>
										);
									})}
								</p>}
							</div>}
							{this.state.gridUrl && <Grid endpoint={this.state.gridUrl} />}
						</article>
					)} />
					{this.state.subcategories.map((route) => (
						<Route
							key={route.url}
							path={route.url}
							render={() => (
								<SubcategoryView
									subcategory={route.name}
									title={route.title}
									description={route.description}
								/>
							)}
						/>
					))}
					<Route component={NoMatch} />
				</Switch>
				<Footer />
			</div>
		)
	}
}
export default OverviewView;
