import React from "react";
import "../assets/styles/components/tile.css";

const Tile = props => {
  return (
    <div className="tile">
      <a href={props.link}>
        <img
          src={require("../assets/images/tiles/" + props.logo + ".png")}
          alt={"logo " + props.logo}
        />
      </a>
    </div>
  );
};

export default Tile;
