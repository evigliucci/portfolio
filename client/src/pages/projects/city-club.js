import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="leakSmart" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Waxman"
          year="2015-2016"
          tech={[
            "Shopify Eccomerce",
            "Wordpress",
            "HTML5",
            "Semantic HTML",
            "CSS3",
            "SCSS",
            "Responsive Design"
          ]}
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image
              path="leaksmart/leaksmart-phone.png"
              alt="Leaksmart Phone Image"
            />
          </div>
          <div className="col-12">
            <div className="blurb">
              <p>
                Progressive.com’s Homepage was built as a mobile first adaptive
                design. It was unique for performance and SEO reasons.
              </p>
            </div>
            <Image
              path="leaksmart/leaksmart-home.png"
              alt="Progressive Home Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
