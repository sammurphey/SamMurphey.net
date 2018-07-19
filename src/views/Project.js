import React, { Component } from "react";
import {Link, Switch} from "react-router-dom";
import Intro from "../components/Intro";
import CategoryPreview from "../components/CategoryPreview";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import TabGroup from "../components/TabGroup";

class ProjectView extends Component {
	state = {
		anim: "page-enter",
		gridTitle: false,
		gridDesc: false,
		data: [],
		songs: [],
		view: "project"
	}
	componentDidMount () {
		if ((this.props.table && this.props.ref_id) || this.props.category === "all") {
			this.getData();
		}
	}
	componentDidUpdate (prevProps) {
		const _props = this.props;
		if (_props.table !== prevProps.table || _props.ref_id !== prevProps.ref_id) {
			this.getData();
		}
	}
	componentWillUnmount () {
		this.setState({anim: "page-leave"});
	}
	getData () {
		console.log("getting project data");
		var url = "https://sammurphey.net/api/index.php?table=" + this.props.table + "&id=" + this.props.ref_id + "&public=true";
		console.log(url);
		fetch(url)
			.then(res => res.json())
				.then((data) => {
					data = data[0];
					if (data.description) {
						if (data.description.charAt(0) === "[") {
							data.description = JSON.parse(data.description);
						}
					}
					if (data.keywords) {
						data.keywords = JSON.parse(data.keywords);
					}
					if (data.song_ids) {
						data.song_ids = JSON.parse(data.song_ids)
					}
					this.setState({"data": data});
					console.log(this.state.data);
					if (this.state.data.song_ids) {
						this.getSongs()
					}
				})
	}
	getSongs() {
		console.log("getting songs...");
		var ids = this.state.data.song_ids;
		console.log(ids);
		ids.map((id) => {
			var url = "https://sammurphey.net/api/index.php?table=songs&id=" + id + "&public=true";
			fetch(url)
				.then(res => res.json())
					.then((data) => {
						console.log(data);

						var songs = this.state.songs;
						//console.log(data[0]);
						songs.push(data[0]);
						this.setState({"songs": songs});
					})
		})
	}
	render () {
		return (
			<div className="project_view">
				<article className={this.state.anim}>
					<Intro title={this.props.title} data={this.state.data} view={this.state.view} current_song={this.state.current_song}/>
					{this.state.data && <div className="has_data">
						{this.state.data.category === "music" && <div className="music_view">
							{this.state.data.song_ids && <div className="album_view panel_wrapper">
								{this.state.songs && <div className="song_list panel">
								<h2>Tracklist</h2>
									<ol>
										{this.state.songs.map((song) => {
											return (
												<li key={song.id}><a href="">{song.title}</a></li>
											)
										})}
									</ol>
								</div>}
								<TabGroup data={this.state.data} />
							</div>}
							{!this.state.data.song_ids && <div className="single_view">
								<div class=""></div>
							</div>}
						</div>}
						<div className="metadata_view panel_wrapper">
							<div className="panel">
								<h2>Metadata</h2>
								{this.state.data.credits && <p className="subtitle">Credits: <span> {this.state.data.credits}</span></p>}
								{this.state.data.keywords && <p className="subtitle">Keywords: {this.state.data.keywords.map((keyword, k) => {
									var delimiter = ", ";
									console.log(this.state.data.keywords.length)
									if (k + 1 === this.state.data.keywords.length) {
										delimiter = " ";
									}
									return (
										<span key={k}>
											<Link to="/search/keyword">{keyword}</Link>{delimiter}
										</span>
									)
								})}</p>}
							</div>
						</div>
					</div>}
				</article>
				<Footer />
			</div>
		)
	}
}
export default ProjectView;
