import React from "react";
import "../styles/Founder.css";
import founderImg from "../assets/er_vijay_kumar_gupta.jpg";

export default function Founder() {
  return (
    <section className="founder-section" id="founder">
      <div className="container">
        <div className="founder-layout">
          {/* Left: Professional Card */}
          <div className="founder-id-card">
            <div className="id-seal">
              <i className="fa-solid fa-stamp"></i>
              <span>PRINCIPAL CONSULTANT &bull; FOUNDER</span>
            </div>

            <div className="id-img-box">
              <img src={founderImg} alt="Er. Vijay Kumar Gupta" />
              <div className="usa-flag-badge">
                <strong>USA Ph.D</strong>
                <span>Civil Structural Design</span>
              </div>
            </div>

            <div className="id-details">
              <h3>Er. Vijay Kumar Gupta</h3>
              <p className="id-degrees">P.hd (USA) &bull; M.tech Civil (Structural Design)</p>
              
              <div className="id-pill-row">
                <span className="id-pill"><i className="fa-solid fa-certificate"></i> Chartered Engineer</span>
                <span className="id-pill"><i className="fa-solid fa-scale-balanced"></i> Govt. Approved Valuer</span>
              </div>

              <div className="id-contact-quick">
                <a href="tel:+917986850367"><i className="fa-solid fa-phone"></i> +91 79868 50367</a>
                <a href="mailto:vjg183@gmail.com"><i className="fa-solid fa-envelope"></i> vjg183@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right: Technical Eminence Details */}
          <div className="founder-editorial">
            <div className="section-tag">
              <span className="dot"></span>
              Engineering Leadership
            </div>

            <h2 className="section-title">
              Engineered with <span>USA Doctorate Rigor</span> & Field Precision
            </h2>

            <p className="founder-summary">
              At <strong>Highrise Structural Consultants</strong>, every foundation calculation, 
              earthquake load analysis, and stability report is personally authorized by <strong>Er. Vijay Kumar Gupta</strong>, 
              bringing decades of cutting-edge civil structural engineering experience from the United States and India.
            </p>

            <div className="leadership-points-grid">
              <div className="l-point">
                <i className="fa-solid fa-building-shield"></i>
                <div>
                  <strong>High-Rise & Dynamic Seismic Analysis</strong>
                  <p>IS 1893 & IS 13920 compliant modeling using ETABS, SAFE & STAAD.Pro.</p>
                </div>
              </div>

              <div className="l-point">
                <i className="fa-solid fa-file-contract"></i>
                <div>
                  <strong>Statutory Stability Certificates (Form A / 1)</strong>
                  <p>Certified Chartered Engineer sign-offs for municipal sanctions and factory acts.</p>
                </div>
              </div>

              <div className="l-point">
                <i className="fa-solid fa-chart-line"></i>
                <div>
                  <strong>Approved Valuer for Banks & Visas</strong>
                  <p>Official valuation reports accepted by nationalized banks and foreign embassies.</p>
                </div>
              </div>

              <div className="l-point">
                <i className="fa-solid fa-coins"></i>
                <div>
                  <strong>Structural Steel & Rebar Optimization</strong>
                  <p>Calculated sizing that saves 15-20% on unnecessary rebar wastage without compromising safety.</p>
                </div>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="consultation-invite">
              <span>Have a project requiring Er. Vijay Kumar Gupta's direct review?</span>
              <a
                href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20would%20like%20to%20consult%20directly%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-sm-wa"
              >
                <i className="fa-brands fa-whatsapp"></i> Direct Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
