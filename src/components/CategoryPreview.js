import React, { Component } from "react";
import {Link} from "react-router-dom";
import InlinePanel from "../components/InlinePanel";

class Category extends Component {
	state = {data: []};
	componentDidMount () {
		if (this.props.table) {
			this.getData(this.props.table)
		}
	}
	componentDidUpdate (prevProps) {
		var _props = this.props;
		if (_props.table !== prevProps.table) {
			this.getData(_props.table)
		}
	}
	getData(table) {
		fetch("https://sammurphey.net/api/index.php?table=" + table + "&public=true&sort_by=order")
			.then(res => res.json())
				.then((data) => {
					this.setState({data: data});
				});
	}
	render () {
		return (
			<section id={this.props.category && "-overview"}>
				{this.props.displayHeaders && <div className="panel">
					<h2>{this.props.category}</h2>
					{Array.isArray(this.props.description) && <p>
						{this.props.description.map((string, k) => {
							return (
								<span key={k}>
									{string}<br/>
								</span>
							);
						})}
					</p>}
					{this.props.description && !Array.isArray(this.props.description) && <p>{this.props.description}</p>}
					<p><Link to={"/" + this.props.category.toLowerCase()} className="">See everything on the {this.props.category} Page.</Link></p>
				</div>}
				<div className="panel_container">
					{this.state.data.map((item, k) => {
						return (
							<InlinePanel key={k} title={item.title} description={item.description} profile={item.profile_img} bg={item.cover_img} url={item.url} />
						);
					})}
				</div>
			</section>
		)
	}
}

class CategoryPreview extends Component {
	state = {
		data: [],
		displayHeaders: false
	};
	componentDidMount () {
		if (this.props.category) {
			this.getData(this.props.category)
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.category !== prevProps.category) {
			this.getData(_props.category);
		}
	}
	getData (category) {
		var _url = "https://sammurphey.net/api/index.php?table=categories&public=true";
		if (category === "all") {
			this.setState({displayHeaders: true});
		} else {
			this.setState({displayHeaders: false});
		}
		if (category) {
			if (category !== "all") {
				_url += "&title=" + this.props.category;
			}
			fetch(_url)
				.then(res => res.json())
					.then((data) => {
						this.setState({data: data});
					});
		}
	}
	render () {
		return (
			<div id="categories_container">
				{this.state.data.map((item, k) => {
					return (
						<Category key={k} category={item.title} description={item.description} table={item.subcategories} displayHeaders={this.state.displayHeaders}/>
					);
				})}
			</div>
		)
	}
}

export default CategoryPreview;
