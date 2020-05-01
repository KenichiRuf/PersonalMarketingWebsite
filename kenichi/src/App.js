import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import CaseStudies from "./views/CaseStudies";
import Leadership from "./views/Leadership";
import Growth from "./views/Growth";
import Resources from "./views/Resources";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/case-studies" component={CaseStudies} />
      <Route exact path="/leadership" component={Leadership} />
      <Route exact path="/growth" component={Growth} />
      <Route exact path="/resources" component={Resources} />
    </Router>
  );
}

export default App;
