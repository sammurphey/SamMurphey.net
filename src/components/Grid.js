import React, { Component } from "react";
import {Link} from "react-router-dom";
import GridItem from "./GridItem";
import ImageElement from "./ImageElement";

class Grid extends Component {
	state = {items: []}
	componentDidMount() {
		fetch(this.props.endpoint)
			.then(res => res.json())
				.then (items => {
					this.setState({items: items})
				})
	}
	render () {
		return (
			<section className="grid">
				<div className="grid_items">
					{this.state.items.map((item, k) => {
						return (
							<GridItem key={k} ref_id={item.ref_id} table={item.table}>
								{griditem => (
									<Link to={griditem.path}>
										<ImageElement ref_id={griditem.cover_img}>
											{image => (
												<img alt={image.alt} src={image.path} title={image.title} />
											)}
										</ImageElement>
										<div className="container">
											<div className="content">
												<h2><span className="subtitle">{griditem.subtitle}</span><br />
												<span className="title">{griditem.title}</span></h2>
												<p className="date">{griditem.date}</p>
												<p className="category">{griditem.category}</p>
											</div>
										</div>
									</Link>
								)}
							</GridItem>
						)
	                })}
				</div>
			</section>
		);
	}
}

export default Grid;
