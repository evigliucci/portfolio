import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const FirstNationalBank = () => {
  return (
    <section className="firstNationalBank">
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
          description="First National Bank wanted a blogging platform to send out business and investment insights. This project was completed at Go2. My role was to create and submit the RFP, travel for sales pitch, architect the solution and build out the blog site for them. I also had to create a matching email template for new posts with constant contact. This was one of my favorite projects because of all the growth opportunities I was given."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image
              path="first-national/fnb-blog.png"
              alt="First National Bank Home Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-blog-small.png"
              alt="First National Bank Blog Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-blog-post.png"
              alt="First National Bank Blog Post Image"
            />
          </div>
          <div className="col-8" data-push-left="off-2">
            <Image
              path="first-national/fnb-menu.png"
              alt="First National Bank Mobile Menu Image"
            />
          </div>
          <div className="col-6">
            <Image
              path="first-national/fnb-contact.png"
              alt="First National Bank Contact Image"
            />
          </div>
          <div className="col-5" data-push-left="off-1">
            <Image
              path="first-national/fnb-email.png"
              alt="First National Bank Email Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FirstNationalBank;
