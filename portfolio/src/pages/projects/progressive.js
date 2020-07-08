import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";

const Progressive = () => {
  return (
    <section className="progressive">
      <ProjectBar
        company="progressive"
        client="Progressive"
        year="2015-2016"
        tech={[".net", "HTML", "CSS"]}
      />
      <Footer />
    </section>
  );
};

export default Progressive;
