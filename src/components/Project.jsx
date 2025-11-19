import React from "react";
import { motion } from "framer-motion";

import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "inskillup",
      desc: "inskill is a learning portal using reactjs. ",
      link: "https://vaarush.in/",
    },
    {
      title: "GearGrid",
      desc: "Car parts frontend website using HTML, CSS.",
      link: "https://hm-battula.github.io/carparts-frontend/",
    },
    {
      title: "IoT Accident Detection System",
      desc: "Smart system that detects accidents and sends GPS coordinates via SMS to emergency contacts.",
      link: "#",
    },
    {
      title: "Traveling booking website",
      desc: "A smart travel service system offering seamless trip planning and booking for Ranadeep Travels.",
      link: "https://ranadeep-travels.vercel.app/",
    },
    
  ];

  return (
    <>
      {/* ===== PORTFOLIO SECTION ===== */}
      <section className="websites-portfolio" id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">
          Explore our recent work to see how we transform brands through web design.
        </p>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} className="btn-outline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Projects;
