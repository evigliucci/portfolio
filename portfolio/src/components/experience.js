import React from "react";
import "../assets/styles/components/experience.css";
import rosetta from "../assets/images/exp-rosetta.png";
import progressive from "../assets/images/exp-progressive.png";
import go2 from "../assets/images/exp-go2.png";

const Experience = props => {
  return (
    <section className="experience">
      <h2 className="heading-1">Experience</h2>
      <div className="expWrap">
        <div className="expItem">
          <img alt="test" src={rosetta} />
          <p className="expDate">2011-2013</p>
          <h4>Fundamentals:</h4>
          <p>
            I will always love Rosetta. I started my career here as an intern
            and stayed on as an Interactive Developer. I was taught by some of
            the most brilliant developers I have ever worked with here. I worked
            on so many projects from emails and banner ads to complex web
            applications. I worked for clients such as Apple, Nationwide,
            Samsung, M&amp;T Bank, Lenovo and many others.
          </p>
        </div>
        <div className="expItem">
          <img alt="test" src={progressive} />
          <p className="expDate">2013-2015</p>
          <h4>Honed my skills:</h4>
          <p>
            I first joined progressive as part of the Progressive.com team. It
            was a very exciting time to be there. I had the opportunity to work
            on the largest redesign of Progressive.com. We overhauled 600+
            pages, bringing new technologies such as OOCSS, .NET Modules, Atomic
            Design and SCSS to the site architecture.
          </p>
        </div>
        <div className="expItem">
          <img alt="test" src={go2} />
          <p className="expDate">2015-2018</p>
          <h4>The Business and The Users:</h4>
          <p>
            Having had the large agency and enterprise experience, I found
            myself wanting to experience a small agency shop. That is how I
            ended up at GO2, a small 50 person agency. Due to it’s size I got to
            flex my front end development roll into the business side. I spent
            time on RFP’s and sales pitches as well as UX studies and
            information architecture.
          </p>
        </div>
        <div className="expItem">
          <img alt="test" src={progressive} />
          <p className="expDate">2018-Current</p>
          <h4>Doing what I love:</h4>
          <p>
            I started to miss Progressive almost the day I left. The culture and
            the organization are truly amazing. When an old friend said he was
            building a team I wanted in. I am currently the Lead Front End
            Developer for Foragentsonly.com on that team. I work with our
            dedicated IT team as well as with 2 scrum teams to manage the
            application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
