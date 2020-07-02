import React from "react";
import "../assets/styles/project.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h2>Project Page</h2>
      <Link to="/progressive">Progressive</Link>
    </section>
  );
};

export default Home;
