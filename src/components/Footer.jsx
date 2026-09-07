import React from "react";
import "../styles/Footer.css";
import logoSvg from "../assets/highrise-logo.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand & Credentials */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <img src={logoSvg} alt="Highrise Structural Consultants Logo" />
              </div>
              <div>
                <span className="footer-title">HIGHRISE</span>
                <span className="footer-sub">STRUCTURAL CONSULTANTS</span>
                <span className="footer-tag">STRUCTURAL ENGINEERS &bull; PROF. CONSULTANTS</span>
              </div>
            </div>

            <p className="footer-about">
              Premier structural engineering and architectural consultancy firm directed by{" "}
              <strong>Er. Vijay Kumar Gupta</strong> (<em>P.hd Civil Structural Design from USA, M.tech Civil</em>). 
              Providing certified structural designs, architectural planning, bank valuations, 
              and Chartered Engineer stability approvals.
            </p>

            <div className="footer-gst-box">
              <i className="fa-solid fa-file-shield"></i>
              <span>GST Registration: <strong>03AASFH4684B1ZD</strong></span>
            </div>
          </div>

          {/* Column 2: 6 Core Disciplines */}
          <div className="footer-col">
            <h4 className="footer-heading">6 Core Disciplines</h4>
            <ul className="footer-links">
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Structural Design (RCC & Steel)</a>
              </li>
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Architectural 2D & 3D Elevation</a>
              </li>
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Construction Estimate & BOQ</a>
              </li>
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Industrial & PEB Sheds</a>
              </li>
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Govt. Approved Property Valuation</a>
              </li>
              <li>
                <a href="#services"><i className="fa-solid fa-angle-right"></i> Chartered Engineer Stability Certs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Principal Consultant */}
          <div className="footer-col">
            <h4 className="footer-heading">Principal Consultant</h4>
            <div className="footer-founder-info">
              <h5>Er. Vijay Kumar Gupta</h5>
              <p className="founder-qual">P.hd, Civil Structural Design, from USA</p>
              <p className="founder-qual">M.tech Civil (Structural Design)</p>
              <span className="footer-badge">Chartered Engineer & Approved Valuer</span>
            </div>

            <div className="footer-hours">
              <h6>Office Consultation Hours:</h6>
              <p><i className="fa-regular fa-clock"></i> Mon - Sat: 9:30 AM - 7:30 PM</p>
              <p><i className="fa-regular fa-calendar-check"></i> Sunday: Prior Appointment</p>
            </div>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Head Office</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>
                  SCO-35, Ground Floor, Opp. VIP Road, High Street Market, Near IDBI Bank, Zirakpur, Punjab 140603
                </span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+917986850367">+91 79868 50367</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                <a
                  href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20am%20contacting%20you%20from%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 79868 50367 (WhatsApp)
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:vjg183@gmail.com">vjg183@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} <strong>Highrise Structural Consultants</strong>. All Rights Reserved.
          </p>
          <p className="footer-bottom-info">
            Er. Vijay Kumar Gupta (Ph.D USA) &bull; GSTIN: 03AASFH4684B1ZD &bull; Zirakpur, Punjab
          </p>
        </div>
      </div>
    </footer>
  );
}