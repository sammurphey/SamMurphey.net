import React, { Component } from "react";
import{BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./css/App.css";

class App extends Component {
  render() {
    return (
		<Router>
	      <div className="App">
	        <Header />
			<Main />
			<Sidebar />
			<footer id="footer">
				<span className="copyright">V7.3</span>
			</footer>
	      </div>
	  </Router>
    );
  }
}

export default App;
