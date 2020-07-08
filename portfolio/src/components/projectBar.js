import React from "react";
import "../assets/styles/components/projectBar.css";

const ProjectBar = props => {
  return (
    <aside className="projectBar">
      <div className="projectBar-group">
        <h3>Company</h3>
        <p>{props.company}</p>
      </div>
      <div className="projectBar-group">
        <h3>Client</h3>
        <p>{props.client}</p>
      </div>
      <div className="projectBar-group">
        <h3>Year</h3>
        <p>{props.year}</p>
      </div>
      <div className="projectBar-group">
        <h3>Technology Used</h3>
        <p>{props.tech}</p>
      </div>
    </aside>
  );
};

export default ProjectBar;
