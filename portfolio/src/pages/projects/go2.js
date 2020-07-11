import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Go2 = () => {
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
          description="While working at GO2 our company changed from a marketing company to a small digital Agency. With the change in direction came the need for a new company website. I did the entire build of this project solo from the development to the deployment."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image path="go2/go2-home.png" alt="Go2 Home Image" />
          </div>
          <div className="col-12">
            <Image path="go2/go2-portfolio.png" alt="GO2 Portfolio Image" />
            <Image path="go2/go2-brands.png" alt="GO2 Brands Image" />
            <Image path="go2/go2-how.png" alt="GO2 How Image" />
            <Image path="go2/go2-own.png" alt="GO2 Own It Image" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Go2;
