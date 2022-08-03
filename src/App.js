import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";


import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes />
   
      </div>
    </Router>
  );
}

export default App;
