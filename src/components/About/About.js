import React from "react";
import {
  ContactWrapper,
} from "./AboutElements";
// import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        {/* <ScrollAnimation animateIn="fadeInLeft"> */}
          {/* <Image
            src={profilePic}
            alt="man-svgrepo"
          /> */}
        {/* </ScrollAnimation> */}
          <div className="AboutBio">
            {/* <ScrollAnimation animateIn="fadeInRight"> */}
            Hi, I'm <strong>Manasa B R</strong> Data Analyst, on the hunt for exciting opportunities in Data Science Field. This GitHub repository showcases my journey and proficiency in data science and machine learning.
            <br /><br />
            Armed with a Masters in Data Science from Great Learning, I'm committed to decoding intricate data puzzles. My expertise encompasses Bachelors in Computer Applications with 5+ years of experience as a Data Analyst, equipping me to extract insights from raw data.
            <br /><br />
            I am very much Eager to collaborate, learn, and contribute. If you're seeking a diligent problem solver with a knack for data-driven insights, let's connect and discuss how I can contribute to your team. 
              <div className="tagline2">
              <p>Do dive into my projects and code, visit here to see my eportfolio of great learning</p>
              <a
            className="newBtn"
            href="https://eportfolio.mygreatlearning.com/manasa-b-r"
            target="_blank"
            rel="noopener noreferrer"
          >
          Great learning
          </a>
              </div>
            {/* </ScrollAnimation> */}
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
