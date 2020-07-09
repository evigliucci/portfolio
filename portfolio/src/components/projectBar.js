import React from "react";
import "../assets/styles/components/projectBar.css";

const ProjectBar = props => {
  const tech = props.tech;
  const techList = tech.map(item => <li key={item.toString()}>{item}</li>);

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
        <ul>{techList}</ul>
      </div>
    </aside>
  );
};

export default ProjectBar;
