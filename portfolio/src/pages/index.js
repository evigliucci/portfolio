import React from "react";
import "../assets/styles/index.css";
import { Link } from "react-router-dom";
import Intro from "../components/intro";
import Hero from "../components/hero";
import Experience from "../components/experience";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      <Intro title="I am a Full-Stack developer with 10 years of digital experience." />
      <Hero isHome={true} title="Tech Stack" />
      <Experience />
      <Button btnName="View Portfolio" url="/portfolio" align="mid" />

      <section className="workSamples">
        <img
          src={require("../assets/images/work-samples.png")}
          alt="work samples"
        />
      </section>
      <section className="sandbox">
        <div className="sandboxWrap">
          <h2 className="heading-1">Sandbox</h2>
          <p>
            I love to learn new things. This is what brought me back to school
            for Full Stack Development. As every developer knows, not all
            projects get completed, some are started just to learn new skills or
            try out new tech. Here is a collection of my sandbox projects.
          </p>
          <button>View Sandbox</button>
        </div>
      </section>
      <footer>
        <div className="footerWrap">
          <h2 className="heading-1">Contact Me</h2>
          <a href="google.com">Github</a>
          <a href="google.com">LinkedIn</a>
          <a href="google.com">Email</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
