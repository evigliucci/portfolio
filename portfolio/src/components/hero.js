import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/hero.css";

const Hero = props => {
  return (
    <section className="hero">
      {props.isHome ? "" : <Link to="/">Home Icon</Link>}

      <h1 className="heading-1">{props.title}</h1>

      {props.isHome ? (
        <img src={require("../assets/images/icons.png")} alt="logo" />
      ) : (
        ""
      )}
    </section>
  );
};

export default Hero;
