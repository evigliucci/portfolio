import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/button.css";

const Button = props => {
  return (
    <div className={"btnAlign-" + props.align}>
      <Link to={props.url} className="btn">
        {props.btnName}
      </Link>
    </div>
  );
};

export default Button;
