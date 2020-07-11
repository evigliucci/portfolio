import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="KLEEN-FREAK" />
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
              path="kleen-freak/kf-laptop.png"
              alt="Kleen Freak Phone Image"
            />
          </div>
          <div className="col-4">
            <Image
              path="kleen-freak/kf-about.png"
              alt="Kleen Freak Phone Image"
            />
          </div>
          <div className="col-8">
            <Image
              path="kleen-freak/kf-about-pg.png"
              alt="Kleen Freak Phone Image"
            />
          </div>

          <div className="col-8">
            <Image
              path="kleen-freak/kf-blog.png"
              alt="Kleen Freak Phone Image"
            />
          </div>
          <div className="col-4">
            <Image
              path="kleen-freak/kf-contact.png"
              alt="Kleen Freak Phone Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
