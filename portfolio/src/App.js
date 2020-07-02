import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Router>
  );
}

export default App;
