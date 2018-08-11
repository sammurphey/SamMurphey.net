import React, { Component } from 'react';
import {Link} from "react-router-dom";
class LogoIcon extends Component {
	render () {
		return (
			<Link to={`/`} id="logo_btn" className="btn">
				<svg className="med icon" width="48" height="48" viewBox="0 0 100 100">
					<path d="M 0 0 L 100 0 L 110 100 L 96 100 L 96 56 L 52 100 	L 0 100 L 0 0
					M 7 4 L 50 48 L 93 4
					M 4 7 L 4 48 L 44 48
					M 56 48 L 96 48 L 96 7
					M 4 52 L 4 93 L 44 52
					M 7 96 L 49 96 L 94 52 L 50 52z">
					</path>
				</svg>
			</Link>
		);
	}
}
class SearchIcon extends Component {
	render () {
		return (
			<Link to={`/search`} id="search_btn" className="btn">
				<svg className="sml icon" width="32" height="32" viewBox="0 0 100 100">
					<polygon id="search_icon_shape_1" fill="none" stroke="#000" strokeWidth="12" transform="rotate(45) translate(24 -36) scale(0.7)" points="5 50,30 10,70 10,95 50,70 90,30 90" />
					<rect id="search_icon_shape_2" fill="#000" transform="rotate(315) translate(-4 84)" height="48" width="12" />
				</svg>
			</Link>
		);
	}
}

class Header extends Component {
	render () {
		return (
			<header id="header">
				<LogoIcon />
				<SearchIcon />
			</header>
		);
	}
}


export default Header
