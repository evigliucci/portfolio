import React from "react";
import "../assets/styles/components/tile.css";
import { Link } from "react-router-dom";

const Tile = props => {
  return (
    <div className="tile">
      <Link to={props.link}>
        <img
          src={require("../assets/images/tiles/" + props.logo + ".png")}
          alt={"logo " + props.logo}
        />
      </Link>
    </div>
  );
};

export default Tile;
