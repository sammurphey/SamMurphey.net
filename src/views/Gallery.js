import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import ImageElement from "../components/ImageElement";
import ScrollToTop from "../components/ScrollToTop";

class Gallery extends Component {
	constructor () {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount () {
		fetch("https://api.sammurphey.net/v2/index.php?table=imgs")
			.then(res => res.json())
			.then((data) => {
				this.setState({data});
				console.log(data)
			});
	}
	render () {
		return (
    			<article id="gallery" className={this.state.anim + " panel_wrapper"} key="homepage" style={{opacity: 1}}>
					<ScrollToTop />
					<Switch>
						<Route exact={true} path="/gallery/" render={()=>{
							return (
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
							)
						}} />
						<Route path="/gallery/:id" render={({ match })=>{
							return(
								<section className="panel img_elem single_img">
									<ImageElement ref_id={match.params.id} />
								</section>
							)
						}} />
					</Switch>
				</article>
		);
	}
}



export default Gallery;
