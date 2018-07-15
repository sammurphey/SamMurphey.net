import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
//views
import OverviewView from "../views/Overview";
import SubcategoryView from "../views/Subcategory";
import ProjectView from "../views/Project";
import DetailsView from "../views/Details";
import NoMatch from "../views/404";

import Gallery from "../views/gallery"; //delete later

class ViewContainer extends Component {
	state = {
		overview: false,
		subcategory: false,
		project: false,
		details: false
	}
	componentDidMount () {
		if (this.props.data) {
			this.updateView();
		}
	}
	componentDidUpdate(prevProps) {
		const _props = this.props;
		if (_props.data !== prevProps.data) {
			this.updateView();
		}
	}
	updateView () {
		switch(this.props.data.view) {
			case "subcategory":
				this.setState({
					"overview": false, "subcategory": true, "project": false, "details": false
				});
				break;
			case "project":
				this.setState({
					"overview": false, "subcategory": false, "project": true, "details": false
				});
				break;
			case "details":
				this.setState({
					"overview": false, "subcategory": false, "project": false, "details": true
				});
				break;
			case "overview":
			case "category":
			case "default":
				this.setState({
					"overview": true, "subcategory": false, "project": false, "details": false
				});
				break;
		}
	}
	render () {
		return (
		<div className="view_container">
			{this.state.overview &&
				<OverviewView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data._ref_id}
				/>
			}
			{this.state.subcategory &&
				<SubcategoryView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data._ref_id}
				/>
			}
			{this.state.project &&
				<ProjectView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data._ref_id}
				/>
			}
			{this.state.details &&
				<DetailsView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data._ref_id}
				/>
			}
		</div>
		)
	}
}

class Main extends Component {
	state = {
		title: false,
		description: false,
		routes: [],
		print_routes: ""
	}
	componentDidMount () {
		fetch("https://sammurphey.net/api/index.php?public=true&table=_refs")
			.then(res => res.json())
				.then((data) => {
					this.setState({"routes": data});
					console.log(this.state.routes);
				})
	}
	render () {
		return (
			<main id="main" className="container">
			<p>
				{this.state.print_routes}
			</p>
					<Switch>
						<Route exact={true} path="/" render={() => (
							<OverviewView category="all" title="Hello World" description="My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work." />
						)} />
						{this.state.routes.map((route) => (
							<Route exact={true} path={route.url} key={route.url} render={() => (
								<ViewContainer data={route} />
							)} />
						))}
						<Route path="/gallery" component={Gallery} />
						<Route component={NoMatch} />
					</Switch>
			</main>
		);
	}
}

/*	{this.state.categories.map((route) => (
		<Route
			key={route.url}
			path={route.url}
			render={() => (
				<OverviewView
					category={route.name} subcategories={route.subcategories}
					title={route.title}
					description={route.description}
					url={route.url}
				/>
			)}
		/>
	))}
	{this.state.aliases.map((route)=> (
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
	{this.state.art_subcategories.map((route)=> (
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
	{this.state.code_subcategories.map((route)=> (
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
	{this.state.design_subcategories.map((route)=> (
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
	{this.state.store_subcategories.map((route)=> (
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
	))}*/

export default Main;
