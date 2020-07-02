import React from "react";
import "./styles/index.css";
import { Link } from "react-router-dom";
import Hero from "../components/hero";

const Home = () => {
  return (
    <main>
      {/*Componenet Intro*/}
      <section className="intro">
        <h1>
          I am a Full-Stack developer with 10 years of digital experience.
        </h1>
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
        <Link
          to={{
            pathname: "/",
            hash: "the-hash"
          }}
        >
          jump link
        </Link>
      </section>
      {/*Componenet Hero*/}
      <Hero isHome={true} title="Tech Stack" />
      {/*Componenet experience*/}
      <section>
        <Link to="/portfolio">Link to Portfolio</Link>
      </section>
      {/*Componenet Button*/}
      {/*Componenet workSamples*/}
      {/*Componenet Sandbox*/}
      {/*Componenet Footer*/}
    </main>
  );
};

export default Home;
