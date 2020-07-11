import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="Canadian Post Office" />
      <div className="project">
        <ProjectBar
          company="Rosetta"
          client="Canadian Post Office"
          year="2013"
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
        <div className="projectContent grid">
          <div className="col-12">
            <Image
              path="canada-post/canada-post-home.png"
              alt="Canada Post Image"
            />
          </div>
          <div className="col-12">
            <Image
              path="canada-post/canada-post-cards.png"
              alt="Canada Post Image"
            />
          </div>
          <div className="col-12">
            <Image
              path="canada-post/canada-post-editor.png"
              alt="Canada Post Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
