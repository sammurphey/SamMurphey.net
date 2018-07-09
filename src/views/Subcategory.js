import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";

import Intro from "../components/Intro";
import Grid from "../components/Grid";

import NoMatch from "../views/404";

class SubcategoryView extends Component {
	state = {
		aliases: [],
		gridUrl: false
	}
	componentDidMount() {
		this.getAliases();
	}
	getAliases () {
		fetch("https://sammurphey.net/api/index.php?table=aliases&public=true")
			.then(res => res.json())
				.then((data) => {
					console.log(data);
					this.setState({
						aliases: data
					})
				})
	}
	render () {
		return (
			<Switch>
				{this.state.aliases.map((route) => (
					<Route
						key={route.url}
						path={route.url}
						render={() => (
							<article id="subcategory_view">
								<Intro title={this.props.title} description={this.props.description} />
								<div className="panel">
									<h2>Albums</h2>
								</div>
								<Grid endpoint={"https://sammurphey.net/api/index.php?view=overview&subcategory=" + route.name + "&table_field=albums&sort_by=date&sort_dir=DESC&public=true"} />
								<div className="panel">
									<h2>Singles</h2>
								</div>
								<Grid endpoint={"https://sammurphey.net/api/index.php?view=overview&subcategory=" + route.name + "&table_field=songs&sort_by=date&sort_dir=DESC&public=true"} />
							</article>
						)}
					/>
				))}
				<Route component={NoMatch} />
			</Switch>
		)
	}
}
export default SubcategoryView;
