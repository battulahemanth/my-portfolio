import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✉️ Send Email via Formspree (or your backend API)
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:battulahemath1998@gmail.com?subject=Portfolio Contact - ${formData.name}&body=${formData.message}`;
  };

  // 💬 WhatsApp Redirect
  const sendWhatsApp = () => {
    const phoneNumber = "917288900770"; // use your WhatsApp number (country code first)
    const message = encodeURIComponent(`Hello, I'm ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        I'd love to collaborate or answer your questions — reach me anytime!
      </p>

      <div className="contact-container">
        {/* ==== Contact Info ==== */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>battulahemanth1998@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 7288900770</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>vizag, India</p>
            </div>
          </div>
        </div>

        {/* ==== Contact Form ==== */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="contact-buttons">
            <button type="submit" className="btn-send">Send Email</button>
            <button
              type="button"
              className="btn-whatsapp"
              onClick={sendWhatsApp}
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
