import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/titleBar.css";

const TitleBar = props => {
  return (
    <div className="titleBar">
      <div className="titleBar-wrap">
        <Link to="/">
          <img
            src={require("../assets/images/leftArrow.png")}
            alt="Prev Icon"
          />
        </Link>
        <h1>{props.title}</h1>
        <Link to="/">
          <img
            src={require("../assets/images/rightArrow.png")}
            alt="Next Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default TitleBar;
