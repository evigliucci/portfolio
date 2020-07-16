import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
import Progressive from "./pages/projects/progressive";
import Leaksmart from "./pages/projects/leaksmart";
import Go2 from "./pages/projects/go2";
import Kleenfreak from "./pages/projects/kleen-freak";
import FirstNationalBank from "./pages/projects/first-national-bank";
import Xfinity from "./pages/projects/xfinity";
import Allergan from "./pages/projects/allergan";
import CanadaPost from "./pages/projects/canada-post";
import CityClub from "./pages/projects/city-club";
import VillageStEds from "./pages/projects/village-st-eds";
import BlossomHill from "./pages/projects/blossom-hill";
import GlobalPrintNet from "./pages/projects/global-print-net";
import ProgPatterns from "./pages/projects/progressive-patterns";
import FAO from "./pages/projects/fao";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/progressive" component={Progressive} />
      <Route exact path="/leaksmart" component={Leaksmart} />
      <Route exact path="/go2" component={Go2} />
      <Route exact path="/kleen-freak" component={Kleenfreak} />
      <Route exact path="/first-national-bank" component={FirstNationalBank} />
      <Route exact path="/xfinity" component={Xfinity} />
      <Route exact path="/allergan" component={Allergan} />
      <Route exact path="/canada-post" component={CanadaPost} />
      <Route exact path="/city-club" component={CityClub} />
      <Route exact path="/village-st-eds" component={VillageStEds} />
      <Route exact path="/blossom-hill" component={BlossomHill} />
      <Route exact path="/global-print-net" component={GlobalPrintNet} />
      <Route exact path="/progressive-patterns" component={ProgPatterns} />
      <Route exact path="/fao" component={FAO} />
    </Router>
  );
}

export default App;
