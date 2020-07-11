import React from "react";
import Footer from "../../components/footer";
import ProjectBar from "../../components/projectBar";
import TitleBar from "../../components/titleBar";
import Image from "../../components/image";

const KleenFreak = () => {
  return (
    <section className="KleenFreak">
      <TitleBar title="KLEEN-FREAK" />
      <div className="project">
        <ProjectBar
          company="GO2"
          client="Waxman"
          year="2015-2016"
          tech={["Shopify", "Wordpress", "SCSS"]}
          description="The Kleen-freak project was completed while working at GO2 Advertising for Waxman industries. The goal was to create a custom wordpress theme to showcase a variety of cleaning products and build a connected ecommerece experience on the Shopify platform to be able to make purchases."
        />
        <div className="projectContent grid no-pop">
          <div className="col-12">
            <Image
              path="kleen-freak/kf-laptop.png"
              alt="Kleen Freak Laptop Image"
            />
          </div>
          <div className="col-4">
            <Image
              path="kleen-freak/kf-about.png"
              alt="Kleen Freak About Image"
            />
          </div>
          <div className="col-8">
            <Image
              path="kleen-freak/kf-about-pg.png"
              alt="Kleen Freak About Page Image"
            />
          </div>

          <div className="col-8">
            <Image
              path="kleen-freak/kf-blog.png"
              alt="Kleen Freak Blog Image"
            />
          </div>
          <div className="col-4">
            <Image
              path="kleen-freak/kf-contact.png"
              alt="Kleen Freak Contact Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default KleenFreak;
