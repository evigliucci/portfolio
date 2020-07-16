import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const BlossomHill = () => {
  return (
    <section className="BlossomHill">
      <TitleBar title="Blossom Hill" />
      <div className="project">
        <ProjectBar
          company="Cleveland Give Camp"
          client="Blossom Hill"
          year="2017"
          tech={["Givecamp", "Wordpress", "Charity"]}
          description="The Blossom Hill project is one of my personal favorites because it was a project completed at Cleveland Givecamp. Cleveland Givecamp is a 3 day charity event where creative and technology professionals camp out all weekend and in 3 days time build a new website for a local nonprofit organization. For this project I was the lead designer and developer."
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image
              path="blossom-hill/blossom-hill.png"
              alt="Blossom Hill Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlossomHill;
