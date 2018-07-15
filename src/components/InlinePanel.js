import React, {Component} from "react";
import {Link} from "react-router-dom";
import ImageElement from "../components/ImageElement";

class InlinePanel extends Component {
	render () {
		var url = this.props.url || ""
		return (
			<Link to={url} className="inline_panel">
				<div className="panel panel_header">
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
				<div className="panel panel_article">
					<p>{this.props.description}</p>
				</div>
			</Link>
		)
	}
}


export default InlinePanel;
