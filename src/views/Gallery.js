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
									{this.state.data.map(item => {
										var i, src_set = [];
										for (i = 0; i < item.sizes; i +=1) {
											var new_path = "https://cdn.sammurphey.net/v2/" + item.path,
												tmp_size = i + 1,
												new_size;
												// 100,
												//200
												//300/
												//400
												//500
												//600
												//800
												//1000
												//1200
												//1400
												//1600
												//1800
												//20000
												//2400
												//2800
											if (tmp_size < 7) {
												new_size = tmp_size * 100;
											} else if (tmp_size < 14) {
												new_size = 600 + ((tmp_size - 6) * 200);
											} else {
												new_size = 2000 + ((tmp_size - 13) * 400);
											}
											src_set.push(new_path + "__" + new_size + "px." + item.ext);
											if (i + 1 === item.sizes) {
												src_set.push(new_path + "." + item.ext)
											}
										}
										return (
											<div key={item.id} style={{float: "left", margin: 5 + "px", width: 150 + "px"}}>
											{src_set.map(imgsrc => {
												return (
													<img src={imgsrc} />
												)
											})}
											<h2><span>{item.title}</span></h2>
											<p>Id: <span>{item.id}</span></p>
											</div>
										)
									})}
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
