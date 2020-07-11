import React from "react";
import Hero from "../components/hero";
import WorkSamples from "../components/workSample";
import Tile from "../components/tile";
import Footer from "../components/footer";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Hero isHome={false} version="tall" title="Portfolio" />
      <WorkSamples version="overlap" />
      <section className="tiles">
        <div className="tile-wrap">
          <Tile link="/progressive" logo="progressive" />
          <Tile link="/leaksmart" logo="leaksmart" />
          <Tile link="/go2" logo="go2" />
          <Tile link="/kleen-freak" logo="kleen-freak" />
          <Tile link="/first-national-bank" logo="first-national-bank" />
          <Tile link="/xfinity" logo="xfinity" />
          <Tile link="/canada-post" logo="canada-post" />

          <Tile link="/village-st-eds" logo="village-st-eds" />
          <Tile link="/blossom-hill" logo="blossom-hill" />
          <Tile link="/global-print-net" logo="global-print-net" />
          <Tile link="/prog-patterns" logo="progressive-old" />
          <Tile link="/fao" logo="progressive-fao" />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Portfolio;
