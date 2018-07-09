import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
//views
import OverviewView from "../views/Overview";
import SubcategoryView from "../views/Subcategory";
import NoMatch from "../views/404";

import Gallery from "../views/gallery"; //delete later


class Main extends Component {
	state = {
		title: false,
		description: false,
		routes: [
			"categories", "aliases", "art_subcategories", "code_subcategories", "design_subcategories", "store_subcategories", "3d", "animation", "fonts", "illustration", "logos", "shirts", "websites"
		],
		categories: [],
		aliases: [],
		art_subcategories: [],
		code_subcategories: [],
		design_subcategories: [],
		store_subcategories: [],
		three_d: [],
		animation: [],
		fonts: [],
		illustration: [],
		logos: [],
		shirts: [],
		websites: []
	}
	componentDidMount () {
		var url = "https://sammurphey.net/api/index.php?public=true&table=";
		this.state.routes.map((route) => (
			fetch(url + route)
				.then(res => res.json())
					.then((data) => {
						var str = route,
							obj = {};
						if (route === "3d") {
							str = "three_d";
						}
					    obj[str] = data;
						this.setState(obj);
					})
		));
	}
	render () {
		return (
			<main id="main" className="container">
					<Switch>
						<Route exact={true} path="/" render={() => (
							<OverviewView category="all" title="Hello World" description="My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work." />
						)} />
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
