import React, { Component } from "react";
import "./App.css";

// routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Additional components
import HeaderBar from "./Components/HeaderBar";

//Pages
import HomePage from "./Components/HomePage";
import ViewItemPage from "./Components/ViewItemPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />

        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/view-item" component={ViewItemPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
