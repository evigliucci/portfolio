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
          description="As a Front End Developer for Progressive Insurance. My responsibilities included creating and maintaing all aspects of Progressive.com as well as all other Progressive owned websites. I also help create awareness and develop a passion for new emerging trends in front end development such as Semantic HTML, OOCSS principals, responsive web and preprocessing languages such as SASS. I worked with a team of 3 developers on the largest rebrand and build of progressive.com"
        />

        <div className="projectContent grid">
          <div className="col-12">
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
              alt="Progressive Home Mobile Image"
            />
          </div>
          <div className="col-4" data-push-left="off-2">
            <Image
              path="progressive/pgr-boat-mobile.png"
              alt="Progressive Boat Mobile Image"
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
              alt="Progressive Boat Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
