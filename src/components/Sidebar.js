import React, { Component } from "react";

class Sidebar extends Component {
	render () {
		return (
			<aside id="sidebar">
				<div className="contents">
					<div id="console">
						<p>Last Updated: <span>3/11/2017</span></p>
						<p>Contact: <a href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a></p>
					</div>
					<img id="qr_code" src="" alt="QR Code" title="Share" />
				</div>
			</aside>
		);
	}
}

export default Sidebar;
