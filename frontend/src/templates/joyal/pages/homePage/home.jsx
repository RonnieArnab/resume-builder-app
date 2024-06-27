import React from "react";
import "./home.css";
import Header from "../../components/header/header"
import Banner from '../../components/banner/banner'
import Skills from "../../components/skills/Skills";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

function JoyalPortfolio() {
  return <div className="main-background">
    <Header/>
    <Banner/>
    <Skills/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/> 
  </div>;
}

export default JoyalPortfolio;
