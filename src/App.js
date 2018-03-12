import React, { Component } from "react";
import{BrowserRouter as Router} from "react-router-dom";
import Header from "./js/Header";
import Main from "./js/Main"
import "./css/App.css";

class App extends Component {
  render() {
    return (
		<Router>
	      <div className="App">
	        <Header />
			<Main />
			<footer id="footer">
				<span className="copyright">V7.3</span>
			</footer>
	      </div>
	  </Router>
    );
  }
}

export default App;
