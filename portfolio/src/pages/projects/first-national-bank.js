import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="First National Bank" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="First National Bank"
          year="2017-2018"
          tech={[
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
              path="first-national/fnb-blog.png"
              alt="First National Bank Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-blog-small.png"
              alt="First National Bank Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-blog-post.png"
              alt="First National Bank Image"
            />
          </div>
          <div className="col-8" data-push-left="off-2">
            <Image
              path="first-national/fnb-menu.png"
              alt="First National Bank Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-contact.png"
              alt="First National Bank Image"
            />
          </div>
          <div className="col-5" data-push-left="off-1">
            <Image
              path="first-national/fnb-email.png"
              alt="First National Bank Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
