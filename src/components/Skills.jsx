import React from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to bring ideas to life 💡
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
