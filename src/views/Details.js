import React, { Component } from "react";
import {Link} from "react-router-dom";
import Intro from "../components/Intro";
import ImageElement from "../components/ImageElement";
import Footer from "../components/Footer";

class DetailsView extends Component {
	state = {
		anim: "page-enter",
		current_song: "",
		now_playing: false,
		gridTitle: false,
		gridDesc: false,
		data: []
	}
	componentDidMount () {
		if ((this.props.table && this.props.ref_id) || this.props.category === "all") {
			this.getData();
		}
		var vars = {};
	    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
		if (vars.now_playing) {
			this.setState({
				"current_song": vars.now_playing,
				"now_playing": true
			});
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.table !== prevProps.table || _props.ref_id !== prevProps.ref_id) {
			this.getData();
			var vars = {};
		    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		        vars[key] = value;
		    });
			if (vars.now_playing) {
				this.setState({
					"current_song": vars.now_playing,
					"now_playing": true
				});
			}
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	capitalizeFirstLetter(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
	getData () {
		console.log("getting project data");
		var url = "https://api.sammurphey.net/v2/index.php?table=" + this.props.table + "&id=" + this.props.ref_id + "&public=true";
		console.log(url);
		fetch(url)
			.then(res => res.json())
				.then((data) => {
					if (data.length === 0) {
						data = false;
					} else if (data.length === 1) {
						data = data[0];
					}
					console.log(data);
					if (data) {
						if (data.title) {
							var title_prefix = "Sam Murphey",
								separator = " | ";
							if (data.alias) {
								title_prefix = data.alias
							}
							if (data.category !== "music" && data.subcategory) {
								separator += this.capitalizeFirstLetter(data.subcategory) + " | ";
							} else if (data.category){
								separator += this.capitalizeFirstLetter(data.category) + " | ";
							}
							document.title = title_prefix + separator + data.title;
						}
						if (data.narrative) {
							if (data.narrative.charAt(0) === "[") {
								data.narrative = JSON.parse(data.narrative);
							}
						}
						if (data.description) {
							if (data.description.charAt(0) === "[") {
								data.description = JSON.parse(data.description);
							}
						}
						if (data.imgs) {
							data.imgs = JSON.parse(data.imgs);
						}
						if (data.adtl_imgs) {
							data.adtl_imgs = JSON.parse(data.adtl_imgs);
						}
						if (data.credits) {
							if (data.credits.charAt(0) === "[") {
								data.credits = JSON.parse(data.credits);
							}
						}
						if (data.tech_stack) {
							if (data.tech_stack.charAt(0) === "[") {
								data.tech_stack = JSON.parse(data.tech_stack);
							}
						}
						if (data.song_ids) {
							data.song_ids = JSON.parse(data.song_ids)
						}
						if (data.keywords) {
							data.keywords = JSON.parse(data.keywords);
						}
						if (data.related) {
							data.related = JSON.parse(data.related);
						}
					}
					this.setState({"data": data});
					if (this.state.data.album_id) {
						console.log("is a song")
						const name = this.state.data.name;
						this.setState({"current_song": name});
						this.getAlbumData(this.state.data.album_id);
					}
				})
	}
	getAlbumData (id) {
		console.log("getting album data");
		var url = "https://api.sammurphey.net/v2/index.php?table=albums&id=" + id + "&public=true";
		console.log(url);
		fetch(url)
			.then(res => res.json())
				.then((data) => {

					this.setState({"album_data": data[0]});
				})
	}
	render () {
		return (
			<div className="details_view">
				<article className={this.state.anim}>
					<Intro title={this.props.title} data={this.state.data} view="details" song_view="single" current_song={this.state.current_song}/>
					{this.state.data && <div className="has_data">

					</div>}
					{this.state.album_data && <div className="has_album_data panel">
						{this.state.album_data.cover_img && <ImageElement ref_id={this.state.album_data.cover_img} />}
							<div className="related_album_info">
								<p>From the album:</p>
								<Link to={this.state.album_data.url} >
									{this.state.album_data.title && <h2>
										{this.state.album_data.title}
									</h2>}
								</Link>
								{this.state.album_data.alias && <p className="subtitle">
									By: <Link to={"/search/" + this.state.album_data.alias}>
										{this.state.album_data.alias}
									</Link>
								</p>}
							</div>
						</div>}

				{/* meta */}
					{this.state.data && <div className="metadata_view panel_wrapper">
						<div className="panel">
							<h2>Metadata</h2>
							{this.state.data.credits && <p className="subtitle">Credits: {Array.isArray(this.state.data.credits) &&
							<span>
								{this.state.data.credits.map((string, k) => {
									return (
										<span key={k}>
											{string}<br/>
										</span>
									);
								})}
							</span>}
							{!Array.isArray(this.state.data.credits) &&
							<span>
								{this.state.data.credits}
							</span>}
							</p>}
							{this.state.data.keywords && <p className="subtitle">Keywords: {this.state.data.keywords.map((keyword, k) => {
								var delimiter = ", ";
							//console.log(this.state.data.keywords.length)
								if (k + 1 === this.state.data.keywords.length) {
									delimiter = "";
								}
								return (
									<span key={k}>
										<Link to={"/search/" + keyword}>{keyword}</Link>{delimiter}
									</span>
								)
							})}</p>}
						</div>
					</div>}
				</article>
				<Footer />
			</div>
		)
	}
}
export default DetailsView;
