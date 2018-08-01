import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
//views
import OverviewView from "../views/Overview";
import SubcategoryView from "../views/Subcategory";
import ProjectView from "../views/Project";
import DetailsView from "../views/Details";
import NoMatch from "../views/404";

import Gallery from "../views/Gallery";
import SearchView from "../views/Search";

import ReactGA from 'react-ga';

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
			default:
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
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data.ref_id}
				/>
			}
			{this.state.subcategory &&
				<SubcategoryView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data.ref_id}
				/>
			}
			{this.state.project &&
				<ProjectView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data.ref_id}
				/>
			}
			{this.state.details &&
				<DetailsView
					title={this.props.data.title} table={this.props.data.table} ref_id={this.props.data.ref_id}
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
		routes: []
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
					<Switch>
						<Route exact={true} path="/" render={() => (
							<OverviewView category="all" title="Hello World" table="default" />
						)} />
						{this.state.routes.map((route) => (
							<Route exact={true} path={route.url} key={route.url} render={() => (
								<ViewContainer data={route} />
							)} />
						))}
						<Route path="/gallery" component={Gallery} />
						<Route path="/search" component={SearchView} />
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
