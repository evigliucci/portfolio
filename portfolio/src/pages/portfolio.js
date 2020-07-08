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
          <Tile link="/leaksmart" logo="go2" />
          <Tile link="/leaksmart" logo="kleen-freak" />
          <Tile link="/leaksmart" logo="first-national-bank" />
          <Tile link="/leaksmart" logo="xfinity" />
          <Tile link="/leaksmart" logo="allergan" />
          <Tile link="/leaksmart" logo="canada-post" />
          <Tile link="/leaksmart" logo="city-club" />
          <Tile link="/leaksmart" logo="village-st-eds" />
          <Tile link="/leaksmart" logo="blossom-hill" />
          <Tile link="/leaksmart" logo="global-print-net" />
          <Tile link="/leaksmart" logo="progressive-old" />
          <Tile link="/leaksmart" logo="progressive-fao" />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Portfolio;
