import React, { Component } from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";
import Grid from "../components/Grid";
import ImageElement from "../components/ImageElement";
import InlinePanel from "../components/InlinePanel";

class HomePage extends Component {
	state = {anim: "page-enter"}

	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}

	render () {
		var url = "https://sammurphey.net/api/index.php?view=overview&sort_by=date&sort_dir=DESC";
		return (
			<div>
    			<article id="homepage_intro" className={this.state.anim} key="0">
					<ScrollToTop />
					<Intro title="Hello World" description="My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA. I have a passion for merging art and code and so I spend most of my time building web-apps and producing music. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll down a bit further for a full reverse-chronological view of ALL my work."/>
					<section id="music-overview">
						<div className="panel">
							<h2>Music</h2>
							<p>I make experimental music under lots of different aliases.</p>
						</div>
						<div className="panel_container">
							<InlinePanel url="/music/silent-synthesis" title="Silent Synthesis" bg="484" profile="99"/>
							<InlinePanel url="/music/shtml" title="SHTML" bg="480" profile="241" />
							<InlinePanel url="/music/sunnli5hh/t" title="Sunnli5hh/t" bg="118" profile="476" />
							<InlinePanel url="/music/syntactic-sugar" title="Syntactic Sugar" bg="289" profile="271"/>
							<InlinePanel url="/music/emma-o-yama" title="Emma O'Yama" bg="63" profile="193"/>
							<InlinePanel url="/music/ikeaatmidnight" title="Ikea@Midnight" bg="485" profile="66" />
							<InlinePanel url="/music/momanddadivefailedyouagain" title="Mom and Dad I've Failed You Again" bg="240" profile="235" />
						</div>
					</section>
					<section id="code-overview">
						<div className="panel">
							<h2>Code</h2>
							<p>Web development work, primarily front-end.</p>
						</div>
						<div className="panel_container">
							<InlinePanel url="/code/websites" title="Websites" bg="170" />
							<InlinePanel url="/code/labs" title="Labs" bg="" />
						</div>
					</section>
					<section id="art-overview">
						<div className="panel">
							<h2>Art</h2>
							<p></p>
						</div>
						<div className="panel_container">
							<InlinePanel url="/art/animation" title="Animation" bg="379" />
							<InlinePanel url="/art/illustration" title="Illustration" bg="457" />
							<InlinePanel url="/art/3d" title="3D" bg="356" />
						</div>
					</section>
					<section id="design-overview">
						<div className="panel">
							<h2>Design</h2>
							<p></p>
						</div>
						<div className="panel_container">
							<InlinePanel url="/design/logos" title="Logos" bg="394" />
							<InlinePanel url="/design/fonts" title="Fonts" bg="385" />
							<InlinePanel url="/design/themes" title="Themes" bg="" />
						</div>
					</section>
					<section id="store-overview">
						<div className="panel">
							<h2>Store</h2>
							<p></p>
						</div>
						<div className="panel_container">
							<InlinePanel url="/store/shirts" title="Shirts" bg="63" />
						</div>
					</section>
				</article>
				<article id="homepage_grid" className={this.state.anim} key="1">
					<h1>All Projects</h1>
					<Grid endpoint={url} />
				</article>
			</div>
		);
	}
}



export default HomePage;
