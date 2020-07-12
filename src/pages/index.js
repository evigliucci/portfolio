import React from "react";
import "../assets/styles/index.css";
import { Link } from "react-router-dom";
import Intro from "../components/intro";
import Hero from "../components/hero";
import Experience from "../components/experience";
import Button from "../components/button";
import Footer from "../components/footer";
import WorkSamples from "../components/workSample";

const Home = () => {
  return (
    <main>
      <Intro title="I am a Full-Stack developer with 10 years of digital experience." />

      <Hero isHome={true} title="Tech Stack" />

      <Experience />

      <Button btnName="View Portfolio" url="/portfolio" align="mid" />

      <WorkSamples />

      <section className="sandbox">
        <div className="sandboxWrap">
          <h2 className="heading-1">Sandbox</h2>
          <p>
            I love to learn new things. This is what brought me back to school
            for Full Stack Development. As every developer knows, not all
            projects get completed, some are started just to learn new skills or
            try out new tech. Here is a collection of my sandbox projects.
          </p>
          <Button btnName="View Sandbox" url="/sandbox" align="mid" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
