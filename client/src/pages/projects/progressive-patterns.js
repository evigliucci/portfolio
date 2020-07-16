import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const ProgPatterns = () => {
  return (
    <section className="ProgPatterns">
      <TitleBar title="Progressive Patterns" />
      <div className="project">
        <ProjectBar
          company="Progressive"
          client="Progressive"
          year="2014"
          tech={["Wordpress", "HTML5", "SCSS", "Responsive Design"]}
          description="While working at Progressive Insurance I was tasked with creating a digital pattern library. The requirements were that the site needed to be intigrated into a CMS, It needed to be resposive to represent our patterns across all screen sizes, the patterns needed to be a live representation and need to show proper code for each pattern."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image
              path="prog-patterns/prog-patterns.png"
              alt="prog-patterns Image"
            />
            <Image
              path="prog-patterns/prog-patterns-nav.png"
              alt="prog-patterns Nav Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProgPatterns;
