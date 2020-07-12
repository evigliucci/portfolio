import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Xfinity = () => {
  return (
    <section className="Xfinity">
      <TitleBar title="Xfinity" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Comcast"
          year="2016"
          tech={["HTML5", "Semantic HTML", "CSS3", "SCSS", "Responsive Design"]}
          description="The Xfinity Job Aids were completed under GO2 for Comcast. The project was to create an interactive training guide to help educate new materials. I created a custom HTML template that was reusable for each monthly Job Aid."
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image
              path="xfinity/xfinity-laptops.png"
              alt="Xfinity Laptop Image"
            />
          </div>
          <div className="col-6">
            <Image path="xfinity/xfinity-red.png" alt="Xfinity Job Aid Image" />
          </div>
          <div className="col-6">
            <Image
              path="xfinity/xfinity-blue.png"
              alt="Xfinity Job Aid Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Xfinity;
