import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message format
    const text = `Hello, I have a query:%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Subject: ${form.subject}%0A
Message: ${form.message}`;

    // 👉 Apna number yaha daalo (country code ke saath)
    const phoneNumber = "919041963091";

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? Let’s build something amazing together.
            Contact us for professional construction services.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>Panipat, Haryana, India</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span>📧</span>
            <p>info@buildmaster.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <input 
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input 
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />

            <input 
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
            />

            <textarea 
              rows="5"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Contact Now</button>

          </form>
        </div>

      </div>

    </section>
  );
}