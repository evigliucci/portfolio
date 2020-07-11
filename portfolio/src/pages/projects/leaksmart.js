import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const Leaksmart = () => {
  return (
    <section className="leakSmart">
      <TitleBar title="leakSmart" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Waxman"
          year="2015-2016"
          tech={["Shopify", "Wordpress", "SCSS"]}
          description="The Leaksmart project was completed while working at GO2 Advertising for Waxman industries. The goal was to create a custom wordpress theme to showcase their new award winning smart home product for detecting and preventing leaks. They also needed a connected ecommerece experience on the Shopify platform to be able to purchase the system and it's components."
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image
              path="leaksmart/leaksmart-phone.png"
              alt="Leaksmart Phone Image"
            />
          </div>
          <div className="col-12">
            <Image
              path="leaksmart/leaksmart-home.png"
              alt="Progressive Home Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Leaksmart;
