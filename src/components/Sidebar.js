import React, { Component } from "react";

class Sidebar extends Component {
	render () {
		return (
			<aside id="sidebar">
				<div className="contents">
					<div id="console">
						<p>Last Updated: <span>5/23/2018</span></p>
						<p>Contact: <a href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a></p>
						<p>Source: <a href="https://github.com/sammurphey/SamMurphey.net.git">github.com/sammurphey/SamMurphey.net.git</a></p>
					</div>
					<img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fsammurphey.net&size=64x64&bgcolor=989898" alt="QR Code" title="Share" />
				</div>
			</aside>
		);
	}
}

export default Sidebar;
