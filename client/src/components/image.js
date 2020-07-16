import React from "react";
import "../assets/styles/components/images.css";

const Image = props => {
  const imagePath = "/images/projects/" + props.path;

  return (
    <div className={"image image-" + props.version}>
      <img src={imagePath} alt={props.alt} />
    </div>
  );
};

export default Image;
