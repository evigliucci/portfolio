import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";

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
        <div className="projectContent">
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Progressive;
