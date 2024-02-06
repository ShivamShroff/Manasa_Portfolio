import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ProjectsTableau from "../components/TableauProjects/Stats";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import CertificateGrid from '../components/Certificates/certiStyle';

function Home() {
  return (
    <>
      
      <Hero />
      <Projects />
      <ProjectsTableau/>
      <About />
      <CertificateGrid/>
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
