import React from "react";
import "../styles/Hero.css";
import logoSvg from "../assets/highrise-logo.svg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        {/* Main Content */}
        <div className="hero-main">
          <div className="hero-gst-badge">
            <span className="dot-beacon"></span>
            <span>GST No: <strong>03AASFH4684B1ZD</strong> &bull; Structural Engineers</span>
          </div>

          <h1 className="hero-title">
            HIGHRISE <span>STRUCTURAL</span> CONSULTANTS
          </h1>

          <p className="hero-tagline">
            Architecture &bull; Estimate &bull; Structural Design &bull; Industrial &bull; Valuation &bull; Chartered Engineer
          </p>

          <div className="founder-highlight-strip">
            <div className="founder-icon"><i className="fa-solid fa-user-graduate"></i></div>
            <div className="founder-text">
              <strong>Er. Vijay Kumar Gupta</strong>
              <span>P.hd, Civil Structural Design, from USA &bull; M.tech Civil</span>
            </div>
          </div>

          <p className="hero-lead-desc">
            Headquartered at Zirakpur, Punjab. Delivering premier structural engineering, 
            earthquake-resistant designs, municipal architectural sanctions, bank valuations, 
            and official Chartered Engineer stability certificates.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20want%20to%20consult%20regarding%20my%20project%20(Highrise%20Structural%20Consultants)."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hero-cta-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>

            <a href="tel:+917986850367" className="btn-call-hero">
              <i className="fa-solid fa-phone"></i> +91 79868 50367
            </a>
          </div>

          {/* Metric Chips */}
          <div className="hero-stat-row">
            <div className="stat-chip">
              <span className="stat-value">25+</span>
              <span className="stat-desc">Years USA & India Exp</span>
            </div>
            <div className="stat-chip">
              <span className="stat-value">1,200+</span>
              <span className="stat-desc">Projects Certified</span>
            </div>
            <div className="stat-chip">
              <span className="stat-value">100%</span>
              <span className="stat-desc">Seismic & IS Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Architectural Card (Desktop) */}
        <div className="hero-side-card">
          <div className="executive-box">
            <div className="exec-header">
              <div className="exec-logo">
                <img src={logoSvg} alt="Highrise Structural Consultants Logo" />
              </div>
              <div>
                <span className="exec-label">GOVT. APPROVED CONSULTANCY</span>
                <h4>Er. Vijay Kumar Gupta</h4>
                <p className="exec-sub">Ph.D (USA) &bull; M.Tech Civil</p>
              </div>
            </div>

            <div className="exec-points">
              <div className="point-item">
                <i className="fa-solid fa-check"></i>
                <div>
                  <strong>Chartered Engineer (CE)</strong>
                  <span>Form A / Form 1 Structural Stability Certificates</span>
                </div>
              </div>
              <div className="point-item">
                <i className="fa-solid fa-check"></i>
                <div>
                  <strong>Approved Valuer</strong>
                  <span>Bank loan mortgage, Visa net worth, capital gains</span>
                </div>
              </div>
              <div className="point-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Zirakpur Head Office</strong>
                  <span>SCO-35, Ground Floor, Opp. VIP Road, High Street Market</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20would%20like%20to%20book%20an%20office%20consultation%20at%20SCO-35%20Zirakpur."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-exec-action"
            >
              <i className="fa-solid fa-calendar-check"></i> Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}