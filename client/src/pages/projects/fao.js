import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Foragentsonly = () => {
  return (
    <section className="Foragentsonly">
      <TitleBar title="Progressive - Foragentsonly.com" />
      <div className="project">
        <ProjectBar
          company="Progressive"
          client="Progressive"
          year="2018-Current"
          tech={[
            ".Net Razor",
            "MVC",
            "Partial Componenets",
            "BEM",
            "SCSS",
            "Semantic HTML",
            "Accessibility"
          ]}
          description="I am currently the Lead Front End Developer for Foragentsonly.com at Progressive Insurance. I oversee the Front End Architecture, do code reviews, work with our IT team and two SCRUM teams to run the platform. This is a private Web Application tagerted at Progressive's 30,000 Independant Agents. I love what I do, and work with an amazing team! With a site that recieves over 100,000 unique pagevies a day I am never bored."
        />
        <div className="projectContent grid">
          <div className="col-12">
            <Image path="fao/fao-login.png" alt="FAO login Image" />
            <Image path="fao/fao-register.png" alt="FAO register Image" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Foragentsonly;
