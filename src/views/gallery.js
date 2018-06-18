import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";

class Gallery extends Component {
	constructor () {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount () {
		fetch("https://sammurphey.net/api/index.php?table=imgs")
			.then(res => res.json())
			.then((data) => {
				this.setState({data});
				console.log(data)
			});
	}
	render () {
		return (
    			<article id="gallery" className={this.state.anim} key="homepage" style={{opacity: 1}}>
					<ScrollToTop />
					<section className="panel">
						{this.state.data.map(item =>
							<div key={item.id} style={{float: "left", margin: 10 + "px", width: 250 + "px"}}>
								<img src={item.path} alt={item.title} width="250px"/>
								<h2><span>{item.title}</span></h2>
								<p>Id: <span>{item.id}</span></p>
							</div>
						)}
						<div style={{clear: "left"}} />
					</section>
				</article>
		);
	}
}



export default Gallery;
