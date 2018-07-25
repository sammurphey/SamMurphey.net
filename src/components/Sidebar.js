import React, { Component } from "react";

class Sidebar extends Component {
	state = {
		url: window.location.pathname,
		cl: ""
	}
	componentDidMount () {
		var url;
		setInterval (() => {
			url = window.location.pathname;
			if (url !== this.state.url) {
				this.setState({"url": url});
				this.handleQRLoad();
			}
		}, 250);
	}
	componentWillUnmount () {
	}
	handleQRLoad () {
		console.log("new url")
		this.setState({"cl": "active"});
		setTimeout( () => {
			this.setState({"cl": ""});
		}, 1000);
	}
	render () {
		return (
			<aside id="sidebar">
				<div className="contents">
					<div id="console">
						<p>Last Updated: <span>7/24/2018</span></p>
						<p>Contact: <a href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a></p>
						<p>Source: <a href="https://github.com/sammurphey/SamMurphey.net.git">github.com/sammurphey/SamMurphey.net.git</a></p>
					</div>
					<a href={"https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net"  + this.state.url + "&size=666x666"} id="qr_wrapper" className={this.state.cl}>
						<img id="qr_code" src={"https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net"  + this.state.url + "&size=64x64&bgcolor=989898"} alt="QR Code" title="Share" />
					</a>
				</div>
			</aside>
		);
	}
}

export default Sidebar;
