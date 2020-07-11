import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="GO2" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="GO2"
          year="2018"
          tech={[
            "Wordpress",
            "PHP",
            "MySQL",
            "HTML5",
            "Semantic HTML",
            "CSS3",
            "SCSS",
            "Responsive Design"
          ]}
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image path="go2/go2-home.png" alt="Leaksmart Phone Image" />
          </div>
          <div className="col-12">
            <Image path="go2/go2-portfolio.png" alt="GO2 Portfolio Image" />
            <Image path="go2/go2-brands.png" alt="GO2 Portfolio Image" />
            <Image path="go2/go2-how.png" alt="GO2 Portfolio Image" />
            <Image path="go2/go2-own.png" alt="GO2 Portfolio Image" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
