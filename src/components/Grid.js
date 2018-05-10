import React, { Component } from "react";
import {Link} from "react-router-dom";

class Item extends Component {
	constructor (props) {
		super(props);
		this.state = {
			date: this.props.date || "",
			description: this.props.description || "",
			title: this.props.title || "",
			url: this.props.url || ""
		}
	}
	render () {
		return (
			<Link className="grid_item" to={this.state.url}>
					<h2>{this.state.title}</h2>
					<p>{this.state.description}</p>
					<p className="date">{this.state.date}</p>
			</Link>
		);
	}
}

class Items extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount () {
		if (this.props.url) {
			this.getData(this.props.url);
		}
	}
	componentWillReceiveProps (nextProps) {
		if (nextProps.url) {
			this.getData(nextProps.url);
		}
	}
	getData (url) {
		fetch(url)
			.then(res => res.json())
			.then((data) => {
				this.setState({data});
			});

	}
	render () {
		return (
			<div className="grid_items">
				{this.state.data.map(item =>
                   <Item key={item.id} title={item.title} />
                )}
			</div>
		);
	}
}


class Grid extends Component {
	constructor (props) {
		super(props);
		this.state = {
			items: this.props.items || "",
			url: ""
		}
	}
	componentDidMount () {
		this.getUrl();
	}
	componentWillReceiveProps() {
		this.getUrl();
	}
	getUrl () {
		this.setState({url: "https://sammurphey.net/api/index.php"});
	}
	render () {
		return (
			<section className="grid">
				<Items url={this.state.url} />
			</section>
		);
	}
}

export default Grid;
