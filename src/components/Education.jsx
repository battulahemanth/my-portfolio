import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "ABC Institute of Technology",
      year: "2021 - 2025",
      details:
        "Specialization in Computer Science. Learned core subjects like Data Structures, Web Development, and Artificial Intelligence.",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "XYZ Junior College",
      year: "2019 - 2021",
      details:
        "Focused on Mathematics, Physics, and Chemistry with a strong foundation in logical reasoning.",
    },
    {
      degree: "Secondary School (SSC)",
      institution: "St. Mary's High School",
      year: "2018 - 2019",
      details:
        "Achieved academic excellence with distinction and active participation in science fairs.",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="edu-title">🎓 Education Details</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
