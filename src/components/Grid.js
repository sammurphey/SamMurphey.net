import React, { Component } from "react";
import {Link} from "react-router-dom";

class Item extends Component {
	constructor (props) {
		super(props);
		this.state = {
			artist: "",
			category: this.props.category || "",
			date: this.props.date || "",
			description: "",
			id: this.props.id || "",
			img: "",
			title: this.props.title || "",
			url: ""
		}
	}
	componentDidMount () {
		this.getData()
	}
	componentWillReceiveProps (nextProps) {
		this.setState({
			category: nextProps.category,
			date: nextProps.date,
			id: nextProps.id,
			title: nextProps.title
		});
		this.getData();
	}
	getData () {
		var url = "https://sammurphey.net/api/index.php?category=" + this.state.category + "&id=" + this.state.id;
		console.log(url);
		fetch(url)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					artist: data[0].artists,
					description: data[0].description,
					img: "https://sammurphey.net/" + data[0].cover_img,
					title: data[0].title,
					url: "https://sammurphey.net/" + data[0].url
				})
			});
	}
	handleImgLoad (e) {
		e.target.classList.add("loaded");
	}
	render () {
		return (
			<Link className="grid_item" to={this.state.url}>
				<img src={this.state.img} onLoad={(e) => this.handleImgLoad(e)} />
				<div className="container">
					<div className="content">
						<h2>{this.state.artist}<br />
						{this.state.title}</h2>
						<p>{this.state.description}</p>
						<p className="date">{this.state.date}</p>
					</div>
				</div>
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
					<Item key={item.id} title={item.title} category={item.category} id={item.ref_id} date={item.date} />
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
