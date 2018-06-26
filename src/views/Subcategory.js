import React, { Component } from "react";
import Intro from "../components/Intro";

class SubcategoryView extends Component {
	render () {
		return (
			<article id="subcategory_view">
				<Intro title={this.props.title} />
			</article>
		)
	}
}
export default SubcategoryView;
