import React, { Component } from 'react';
import {Link} from "react-router-dom";
class LogoIcon extends Component {
	render () {
		return (
			<Link to={`/`} id="logo_btn" className="btn">
				<svg className="lrg icon" fill="#000" width="48" height="48" viewBox="0 0 100 100">
					<polygon points="0 0,100 0,100 100,96 100,96 56,52 100,0 100" />
					<g fill="#F9F9F9">
						<polygon points="7 4,50 48,93 4" />
						<polygon points="4 7,4 48,44 48" />
						<polygon points="56 48,96 48,96 7" />
						<polygon points="4 52,4 93,44 52" />
						<polygon points="7 96 49,96,94 52,50 52" />
					</g>
				</svg>
			</Link>
		);
	}
}
class MainNav extends Component {
	render () {
		return (
			<nav id="main_nav">
				<ul>
					<li>
						<Link to={`/music`}>Music</Link>
					</li>
					<li>
						<Link to={`/code`}>Code</Link>
					</li>
					<li>
						<Link to={`/art`}>Art</Link>
					</li>
					<li>
						<Link to={`/store`}>Store</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
class SearchIcon extends Component {
	render () {
		return (
			<Link to={`/search`} id="search_btn" className="btn">
				<svg className="sml icon" width="48" height="48" viewBox="0 0 100 100">
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
				<MainNav />
				<SearchIcon />
			</header>
		);
	}
}


export default Header
