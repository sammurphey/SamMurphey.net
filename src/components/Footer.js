import React, { Component } from "react";
class Footer extends Component {
	state = {anim: "page-enter"}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	handleSignUp (e) {
		e.preventDefault();
	}
	render () {
		return (
			<footer id="footer" className={this.state.anim}>
				<div id="speakers"></div>
				<section id="newsletter_panel" className="panel">
					<h2>Stay in Touch</h2>
					<p>Sign up for email notifications to get alerted whenever I post new material.</p>
					<form id="newsletter">
						<input type="text" placeholder="Email Address" />
						<input type="submit" value="Sign Up" onClick={this.handleSignUp}/>
					</form>
					<p><a href="#">Prefer RSS? Click here.</a></p>
				</section>
				<section id="social_panel" className="panel">
					<h2>Connect Online</h2>
					<p>Follow me on these social networks to see photos, updates, and WIP posts.</p>
					<div className="chips_container">
						<a href="https://patreon.com/sammurphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/patreon.svg" alt="Patreon Logo" title="Patreon" />
						</a>
						<a href="https://twitter.com/weirdoonthebus" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/twitter.svg" alt="Twitter Logo" title="Twitter" />
						</a>
						<a href="https://instagram.com/essaitchteeemel" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/instagram.svg" alt="Instagram Logo" title="Instagram" />
						</a>
						<a href="https://sammurphey.tumblr.com" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/tumblr.svg" alt="Tumblr Logo" title="Tumblr" />
						</a>
						<a href="https://ello.co/sammurphey" className="btn chip" rel="noopener noreferrer">
							<img className="icon" src="https://sammurphey.net/img/social/ello.svg" alt="Ello Logo" title="Ello" />
						</a>
						<a href="https://sammurphey.bandcamp.com" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/bandcamp.svg" alt="Bandcamp Logo" title="Bandcamp" />
						</a>
						<a href="https://soundcloud.com/sammurphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/soundcloud.svg" alt="Soundcloud Logo" title="Soundcloud" />
						</a>
						<a href="https://github.com/sammurphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/github.svg" alt="GitHub Logo" title="GitHub" />
						</a>
						<a href="https://codepen.com/sammurphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/codepen.svg" alt="CodePen Logo" title="CodePen" />
						</a>
						<a href="https://stackoverflow.com/users/2719504/sam-murphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/stackoverflow.svg" alt="StackOverflow Logo" title="StackOverflow" />
						</a>
						<a href="https://facebook.com" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/facebook.svg" alt="Facebook Logo" title="Facebook" />
						</a>
						<a href="https://www.linkedin.com/in/sammurphey" className="btn chip" rel="noopener noreferrer" target="_blank">
							<img className="icon" src="https://sammurphey.net/img/social/linkedin.svg" alt="LinkedIn Logo" title="LinkedIn" />
						</a>
					</div>
					<div className="corner bottom-right"></div>
				</section>
			</footer>
		);
	}
}

export default Footer;
