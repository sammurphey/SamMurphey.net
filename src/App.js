import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ReactGA from 'react-ga';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

function initializeReactGA() {
    ReactGA.initialize('UA-93371306-1');
    ReactGA.pageview('/homepage');
}

class App extends Component {
  	render() {
		return (
			<Router>
		      <div className="App">
		        <Header />
				<Menu />
				<Main />
				<Sidebar />
				<span className="version_number">V7.3.1</span>
		      </div>
		  </Router>
	);
	}
}

export default App;
