import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
import Progressive from "./pages/projects/progressive";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/progressive" component={Progressive} />
    </Router>
  );
}

export default App;
