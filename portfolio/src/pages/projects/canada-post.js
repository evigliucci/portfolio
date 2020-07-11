import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const CanadaPost = () => {
  return (
    <section className="CanadaPost">
      <TitleBar title="Canadian Post Office" />
      <div className="project">
        <ProjectBar
          company="Rosetta"
          client="Lowe Martin Group"
          year="2012"
          tech={[".Net RIA", "Websphere Commerce", "OOCSS"]}
          description="This was a project completed under Rosetta. It was a large scale Ecommerce website for creating, printing and mailing personalized postage materials for the Canadian Post Office."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image
              path="canada-post/canada-post-home.png"
              alt="Canada Post Home Image"
            />
          </div>
          <div className="col-12">
            <Image
              path="canada-post/canada-post-cards.png"
              alt="Canada Post Cards Image"
            />
          </div>
          <div className="col-12">
            <Image
              path="canada-post/canada-post-editor.png"
              alt="Canada Post Editor Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CanadaPost;
