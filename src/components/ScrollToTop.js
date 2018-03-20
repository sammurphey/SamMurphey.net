import React, { Component } from "react";

class ScrollToTop extends Component {
	componentDidMount () {
		window.scrollTo(0,0);
	}
	render () {
		return (
			<div className="scroll_to_top"></div>
		);
	}
}

export default ScrollToTop;
