import React, {Component} from "react";
import {Link} from "react-router-dom";
import ImageElement from "../components/ImageElement";

class InlinePanel extends Component {
	render () {
		return (
			<Link to={this.props.url} className="panel">
				<div className="panel_header">
					<div className="profile_bg">
						<div className="bg_container">
							{this.props.bg && <ImageElement ref_id={this.props.bg} override_shape="tall" />}
						</div>
					</div>
					{this.props.profile && <div className="profile_photo">
						<ImageElement ref_id={this.props.profile} />
					</div>}
					<h3>{this.props.title}</h3>
				</div>
				<div className="panel_article">
					<p>adfsdfasdf</p>
					<p>adfsdfasdf</p>
					<p>adfsdfasdf</p>
				</div>
			</Link>
		)
	}
}


export default InlinePanel;
