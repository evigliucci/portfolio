import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/intro.css";

const Intro = props => {
  return (
    <section className="intro">
      <div className="introWrapper">
        <h1>{props.title}</h1>

        <p>
          My name is Erika Vigliucci and I have a passion for design and
          technology. My degree is in interactive media and design and I have a
          full-stack certification from Case Western Reserve. Outside of work I
          have my husband Frank and our two kids, Hailey(2) and Ava(1 ). I love
          movies, boating, wakeboarding, and camping.
        </p>
        <p>
          I am currently a Lead Web Developer at Progressive Insurance. I
          oversee the Front End Architecture of Foragentsoly.com. This is a
          private Web Application tagerted at Progressive's 30,000 Independant
          Agents. I love what I do, and work with an amazing team! With a site
          that recieves over 100,000 unique pagevies a day I am never bored.
        </p>
      </div>
    </section>
  );
};

export default Intro;
