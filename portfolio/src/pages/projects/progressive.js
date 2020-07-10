import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Progressive = () => {
  return (
    <section className="progressive">
      <TitleBar title="Progressive" />
      <div className="project">
        <ProjectBar
          company="progressive"
          client="Progressive"
          year="2013-2015"
          tech={[
            ".Net Razor",
            "HTML5",
            "Semantic HTML",
            "CSS3",
            "SCSS",
            "Responsive Design",
            "SEO",
            "Accessibility",
            "Google Analytics",
            "Google Tag Manager"
          ]}
        />
        <div className="projectContent grid">
          <div className="col-12">
            <div className="blurb clear">
              <p>
                Myself and 2 other front end developers built the largest
                redesign of Progressive.com. We overhauled 600+ pages, bringing
                new technologies such as OOCSS, .NET Modules, Atomic Design and
                SCSS to the site architecture. We integrated Google Tag Manager,
                GA Tracking, a CMS and an AB/MVT platform.
              </p>
            </div>

            <Image
              path="progressive/pgr-home.png"
              alt="Progressive Home Image"
            />
          </div>
          <div className="col-4" data-push-left="off-1">
            <div className="blurb">
              <p>
                Progressive.com’s Homepage was built as a mobile first adaptive
                design. It was unique for performance and SEO reasons.
              </p>
            </div>
            <Image
              path="progressive/pgr-home-mobile.png"
              alt="Progressive Home Image"
            />
          </div>
          <div className="col-4" data-push-left="off-2">
            <Image
              path="progressive/pgr-boat-mobile.png"
              alt="Progressive Home Image"
            />
            <div className="blurb">
              <p>
                Progressive.com’s product pages were built using traditional
                responsive design.
              </p>
            </div>
          </div>
          <div className="col-12">
            <Image
              path="progressive/pgr-boat.png"
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
