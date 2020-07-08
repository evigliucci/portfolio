import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";

const Home = () => {
  return (
    <section>
      <Hero isHome={false} title="Portfolio" />
      <h2>Portfolio Page</h2>
      <Link to="/progressive">Progressive</Link>
    </section>
  );
};

export default Home;
