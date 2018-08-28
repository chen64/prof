import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Background from "./image/bg.png";
var divStyle = {
    width:"100%",
    height:"100%",
    backgroundImage: 'url('+Background+')'
}
const App = () => 
  <Router>
    <div className="bg" style={divStyle}>
      <Navbar />
        <Route exact path = "/" component={About} />
        <Route exact path = "/project" component={Project} />
        <Route exact path = "/contact" component={Contact} />
    </div>
  </Router>

export default App;
