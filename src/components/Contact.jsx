import React, { useState } from "react";
import "../styles/Contact.css";
import logoSvg from "../assets/highrise-logo.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Structural Design",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Consultation Query - Highrise Structural Consultants*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.service)}%0A` +
      `*Details:* ${encodeURIComponent(formData.message)}%0A%0A` +
      `_Sent from Website_`;

    window.open(`https://wa.me/917986850367?text=${text}`, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">
            <span className="dot"></span>
            Office & Direct Inquiry
          </div>
          <h2 className="section-title">
            Visit Our Office or <span>Connect Instantly</span>
          </h2>
          <p className="section-subtitle">
            Consult directly with Er. Vijay Kumar Gupta at our Zirakpur office or message on WhatsApp.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Poster Details Card */}
          <div className="contact-info-card">
            <div className="office-top-row">
              <img src={logoSvg} alt="Highrise Logo" className="contact-logo" />
              <div>
                <h3>HIGHRISE STRUCTURAL CONSULTANTS</h3>
                <p>STRUCTURAL ENGINEERS &bull; PROF. CONSULTANTS</p>
                <span className="gst-tag">GST: 03AASFH4684B1ZD</span>
              </div>
            </div>

            <div className="founder-contact-chip">
              <i className="fa-solid fa-user-tie"></i>
              <div>
                <strong>Er. Vijay Kumar Gupta</strong>
                <span>P.hd (USA) &bull; M.tech Civil &bull; Chartered Engineer</span>
              </div>
            </div>

            <div className="contact-items-list">
              <a href="tel:+917986850367" className="c-item">
                <div className="c-icon phone"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <span className="c-lbl">Direct Phone & WhatsApp</span>
                  <strong className="c-val">+91 79868 50367</strong>
                </div>
              </a>

              <a href="mailto:vjg183@gmail.com" className="c-item">
                <div className="c-icon email"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <span className="c-lbl">Official Email</span>
                  <strong className="c-val">vjg183@gmail.com</strong>
                </div>
              </a>

              <div className="c-item addr">
                <div className="c-icon loc"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <span className="c-lbl">Office Address</span>
                  <strong className="c-val-addr">
                    SCO-35, GROUND FLOOR, OPP. VIP ROAD,<br />
                    HIGH STREET MARKET, NEAR IDBI BANK,<br />
                    ZIRKPUR, PUNJAB 140603
                  </strong>
                </div>
              </div>
            </div>

            <div className="contact-cta-row">
              <a
                href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20want%20to%20visit%20your%20office%20at%20SCO-35%20Zirakpur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp c-btn"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a href="tel:+917986850367" className="btn-call-outline c-btn">
                <i className="fa-solid fa-phone"></i> Call Direct
              </a>
            </div>
          </div>

          {/* Right: Quick Form */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <h3>Fast Technical Consultation</h3>
              <p>Direct message to Er. Vijay Kumar Gupta</p>
            </div>

            <form onSubmit={handleSubmit} className="quick-form">
              <div className="f-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rajesh Kumar"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="f-group">
                <label>WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="f-group">
                <label>Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Structural Design">Structural Design (RCC / Steel / Highrise)</option>
                  <option value="Architecture">Architecture & 3D Elevation</option>
                  <option value="Estimate">Cost Estimate & BOQ</option>
                  <option value="Industrial">Industrial PEB / Factory Shed</option>
                  <option value="Valuation">Govt. Approved Property Valuation</option>
                  <option value="Chartered Engineer">Chartered Engineer Stability Certificate</option>
                </select>
              </div>

              <div className="f-group">
                <label>Project Details / Location *</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Please describe floors, plot area, or specific requirements..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-whatsapp btn-form-submit">
                <i className="fa-brands fa-whatsapp"></i> Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Compact Map */}
        <div className="compact-map-wrap">
          <div className="compact-map-header">
            <span><i className="fa-solid fa-map-pin"></i> SCO-35, Ground Floor, High Street Market, Opp. VIP Road, Zirakpur</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=High+Street+Market+VIP+Road+Zirakpur+Punjab+140603"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map-dir"
            >
              Directions <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <iframe
            title="Highrise Location Map"
            src="https://maps.google.com/maps?q=High+Street+Market+VIP+Road+Zirakpur+Punjab+140603&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}