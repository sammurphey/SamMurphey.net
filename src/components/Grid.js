import React, { Component } from "react";
import {Link} from "react-router-dom";

class Grid extends Component {
	render () {
		return (
			<section id="grid" className="grid">
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
				<Link to={`/search`} className="panel">
					<p>{this.props.items}</p>
				</Link>
			</section>
		);
	}
}

export default Grid;
