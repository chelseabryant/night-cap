import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/cocktails/whiskey">CocktailsPage</Link>
          </li>
          <li>
            <Link to="/home-bar">HomeBarPage</Link>
          </li>
        </ul>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
