import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const GlobalPrintNet = () => {
  return (
    <section className="GlobalPrintNet">
      <TitleBar title="Global Print Network" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Global Print Network"
          year="2016"
          tech={["Wordpress", "HTML5", "SCSS"]}
          description="Global Print Network was a project completed for the CEO of GO2s side company called Global Print Network. He was looking for something really simple to establish his business and get his and his partners contact info out on the web. This project was completed in about a weeks time. I did the wireframes, designs, and development."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image
              path="global-print-net/global-print-net-home.png"
              alt="global Print Net Image"
            />
            <Image
              path="global-print-net/global-print-net-map.png"
              alt="global Print Net Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GlobalPrintNet;
