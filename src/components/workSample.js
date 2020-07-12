import React from "react";
import "../assets/styles/components/workSample.css";

const WorkSamples = props => {
  return (
    <section className={"workSamples " + props.version}>
      <img
        src={require("../assets/images/work-samples.png")}
        alt="work samples"
      />
    </section>
  );
};

export default WorkSamples;
