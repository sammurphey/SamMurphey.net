import React, { Component } from "react";
import{BrowserRouter as Router} from "react-router-dom";
import Header from "./js/Header";
import Main from "./js/Main"
import Footer from "./js/Footer";
import "./App.css";
import "./css/global.css"

class App extends Component {
  render() {
    return (
		<Router>
	      <div className="App">
	        <Header />
			<Main />
			<Footer />
	      </div>
	  </Router>
    );
  }
}

export default App;
