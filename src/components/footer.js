import React from "react";
import "../assets/styles/components/footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <h2 className="heading-1">Contact Me</h2>
      <div className="footerWrap">
        <a href="https://github.com/evigliucci" target="_blank">
          <img
            src={require("../assets/images/icon-github.png")}
            alt="Connect on Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/erika-vigliucci/" target="_blank">
          <img
            src={require("../assets/images/icon-linkedin.png")}
            alt="Connect on LinkedIn"
          />
        </a>
        <a href="mailto:evigliucci@gmail.com" target="_blank">
          <img
            src={require("../assets/images/icon-email.png")}
            alt="Connect via Email"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
