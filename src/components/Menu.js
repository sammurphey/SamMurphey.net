import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
	render () {
		return (
			<nav id="menu">
				<ul>
					<li>
						<Link to={`/music`} className="btn">Music</Link>
					</li>
					<li>
						<Link to={`/code`} className="btn">Code</Link>
					</li>
					<li>
						<Link to={`/art`} className="btn">Art</Link>
					</li>
					<li>
						<Link to={`/design`} className="btn">Design</Link>
					</li>
					<li>
						<Link to={`/store`} className="btn">Store</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
export default Menu;
