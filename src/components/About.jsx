import React from "react";
import "../styles/About.css";

const About = () => {
  const educationData = [
    {
      degree: "MCA",
      institution: "Gayatri Vidya Parishad",
      year: "2022 - 2024",
      details:
        "Specialization in Computer Science. Learned core subjects like Data Structures, Web Development, and IoT.",
    },
    {
      degree: "MA Sociology",
      institution: "Andhra University",
      year: "2019 - 2021",
      details: "Scored 68% overall. Developed strong analytical and research skills.",
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Maharaj College",
      year: "2015 - 2018",
      details: "Graduated with 68%. Focused on programming and database fundamentals.",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sree Kasyap Junior College",
      year: "2013 - 2015",
      details: "Achieved 79.5%. Strengthened mathematical and logical reasoning skills.",
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Ravindra Bharathi School",
      year: "2013",
      details: "Secured 68%. Built foundational academic and discipline skills.",
    },
  ];

  const hobbies = [
    { name: "🎧 Music", desc: "Listening to melodies and singing classical music." },
    { name: "💻 Coding", desc: "Building innovative projects using JavaScript, React, and Python." },
    { name: "♟️ Chess", desc: "Playing regularly to stay active and improve strategic thinking." },
  ];

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">✨ About Me</h2>

      {/* === Education Timeline === */}
      <div className="education-section">
        <h3 className="edu-title">🎓 Education Details</h3>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{edu.degree}</h4>
                <h5>{edu.institution}</h5>
                <span className="year">{edu.year}</span>
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Hobbies Section === */}
      <div className="hobbies-section">
        <h3 className="hobbies-title">🌈 My Hobbies & Interests</h3>
        <div className="hobby-cards">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <h4>{hobby.name}</h4>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
