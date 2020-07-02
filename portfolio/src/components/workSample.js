import React from "react";
import { Link } from "react-router-dom";

const Hero = props => {
  return (
    <div>
      {props.isHome ? "" : <Link to="/">Home Icon</Link>}

      <h1>HERO COMPONENT</h1>
      <img alt="test" />
    </div>
  );
};

export default Hero;
