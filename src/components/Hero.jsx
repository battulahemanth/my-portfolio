import React from "react";
import "../styles/Hero.css";
import profilePic from "../assets/MY-PIC.jpg"; 
import resumeFile from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h3>Hello, I'm</h3>
        <h1><span>Hemanth Battula</span></h1>
        <h2>Full Stack Developer 💻</h2>
        <p>
          I create beautiful and responsive web interfaces using React, JavaScript, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Hire Me</a>
          <a href={resumeFile} download className="btn-secondary">
  Download CV
</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="Hemanth Battula" />
      </div>
    </section>
  );
};

export default Hero;
