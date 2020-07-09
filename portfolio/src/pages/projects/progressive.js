import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";

const Progressive = () => {
  return (
    <section className="progressive">
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
      <Footer />
    </section>
  );
};

export default Progressive;
