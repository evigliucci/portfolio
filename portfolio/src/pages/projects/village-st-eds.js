import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Village = () => {
  return (
    <section className="Village">
      <TitleBar title="The Village of St. Eds." />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="The Village of St. Eds."
          year="2017"
          tech={["Wordpress", "Event Management", "SCSS", "Responsive Design"]}
          description="The Village of St. Edwards project was completed while working at GO2 Advertising. The goal was to create a wordpress website that was intuitive for the residents, informative to prospective residents and easy to maintain for the staff."
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image path="village/village-mobile.png" alt="Village Image" />
            <Image path="village/village-collection.png" alt="Village Image" />
            <Image path="village/village-home.png" alt="Village Image" />
            <Image path="village/village-map.png" alt="Village Image" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Village;
