import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
//views
import OverviewView from "../views/Overview";
import DetailsView from "../views/Details";
import NoMatch from "../views/404";

import Gallery from "../views/gallery"; //delete later


class Main extends Component {
	state = {
		categories: [],
		title: false,
		description: false
	}
	componentDidMount () {
		fetch("https://sammurphey.net/api/index.php?table=categories&public=true")
			.then(res => res.json())
				.then((data) => {
					this.setState({
						categories: data
					})
				})
	}
	render () {
		console.log(this.state.subcategories);
		return (
			<main id="main" className="container">
					<Switch>
						<Route exact={true} path="/" render={() => (
							<OverviewView category="all" title="Hello World" description="My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work." />
						)} />
						{this.state.categories.map((route) => (
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
						<Route component={NoMatch} />
					</Switch>
			</main>
		);
	}
}

export default Main;
