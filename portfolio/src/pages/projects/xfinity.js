import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="Xfinity" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Comcast"
          year="2016"
          tech={["HTML5", "Semantic HTML", "CSS3", "SCSS", "Responsive Design"]}
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image path="xfinity/xfinity-laptops.png" alt="Xfinity Image" />
          </div>
          <div className="col-6">
            <Image path="xfinity/xfinity-red.png" alt="Xfinity Image" />
          </div>
          <div className="col-6">
            <Image path="xfinity/xfinity-blue.png" alt="Xfinity Image" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
