import React from "react";
import "../styles/Hero.css";
import luxuryHeroImg from "../assets/luxury_hero.jpg";
import logoSvg from "../assets/highrise-logo.svg";

export default function Hero() {
  return (
    <section className="luxury-hero">
      {/* Background 8K Skyscraper Visual with Cinematic Overlay */}
      <div className="hero-backdrop">
        <img src={luxuryHeroImg} alt="Highrise Structural Engineering Skyscraper" className="hero-bg-img" />
        <div className="hero-cinematic-overlay"></div>
      </div>

      <div className="container hero-content-wrap">
        <div className="hero-grid">
          {/* Left Column: Brand & Offerings */}
          <div className="hero-text-col">
            <div className="hero-trust-row">
              <span className="hero-badge-gst">
                <i className="fa-solid fa-certificate"></i> GSTIN: <strong>03AASFH4684B1ZD</strong>
              </span>
              <span className="hero-badge-usa">
                <i className="fa-solid fa-graduation-cap"></i> USA Ph.D &bull; M.Tech Civil
              </span>
            </div>

            <h1 className="hero-main-title">
              HIGHRISE <span>STRUCTURAL</span> CONSULTANTS
            </h1>

            <p className="hero-tagline-text">
              STRUCTURAL ENGINEERS &bull; PROF. CONSULTANTS &bull; CHARTERED ENGINEERS
            </p>

            <p className="hero-bio-lead">
              Headquartered at <strong>Zirakpur, Punjab</strong>. Directed by{" "}
              <strong className="founder-highlight">Er. Vijay Kumar Gupta</strong> (
              <em>P.hd, Civil Structural Design from USA</em> & <em>M.tech Civil</em>). Delivering 
              world-class <strong>Structural Design</strong>, modern <strong>Architecture</strong>, 
              <strong>Estimates & BOQ</strong>, <strong>Industrial PEB Sheds</strong>, 
              Bank-approved <strong>Valuations</strong>, and <strong>Chartered Engineer</strong> Certifications.
            </p>

            {/* Poster 6 Services Pill Strip */}
            <div className="hero-disciplines-strip">
              <span className="disc-chip"><i className="fa-solid fa-compass-drafting"></i> Architecture</span>
              <span className="disc-chip"><i className="fa-solid fa-calculator"></i> Estimate</span>
              <span className="disc-chip"><i className="fa-solid fa-cubes"></i> Structural Design</span>
              <span className="disc-chip"><i className="fa-solid fa-industry"></i> Industrial</span>
              <span className="disc-chip"><i className="fa-solid fa-scale-balanced"></i> Valuation</span>
              <span className="disc-chip"><i className="fa-solid fa-stamp"></i> Chartered Engineer</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-cta-actions">
              <a
                href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20would%20like%20to%20consult%20regarding%20my%20project%20(Highrise%20Structural%20Consultants)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp hero-wa-cta"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>

              <a href="tel:+917986850367" className="btn-call-hero">
                <i className="fa-solid fa-phone"></i> +91 79868 50367
              </a>
            </div>

            {/* Metrics */}
            <div className="hero-metrics-glass">
              <div className="glass-metric">
                <span className="metric-num">25+</span>
                <span className="metric-txt">Years USA & India Exp</span>
              </div>
              <div className="glass-metric">
                <span className="metric-num">1,200+</span>
                <span className="metric-txt">Projects Certified</span>
              </div>
              <div className="glass-metric">
                <span className="metric-num">100%</span>
                <span className="metric-txt">Seismic & IS Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Executive Card */}
          <div className="hero-card-col">
            <div className="executive-glass-card">
              <div className="exec-card-head">
                <div className="exec-logo-frame">
                  <img src={logoSvg} alt="Highrise Structural Consultants Logo" />
                </div>
                <div>
                  <span className="exec-tag">AUTHORITY PROFILE</span>
                  <h3 className="exec-name">Er. Vijay Kumar Gupta</h3>
                  <span className="exec-degrees">P.hd (USA) &bull; M.tech Civil</span>
                </div>
              </div>

              <div className="exec-list">
                <div className="exec-row">
                  <div className="exec-check"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <strong>Chartered Engineer (CE)</strong>
                    <p>Official Structural Stability Certificates (Form A / Form 1)</p>
                  </div>
                </div>

                <div className="exec-row">
                  <div className="exec-check"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <strong>Govt. Approved Valuer</strong>
                    <p>Bank mortgage, VISA immigration net worth, capital gains</p>
                  </div>
                </div>

                <div className="exec-row">
                  <div className="exec-check"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <strong>Head Office Zirakpur</strong>
                    <p>SCO-35, Ground Floor, Opp. VIP Road, High Street Market</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20want%20to%20schedule%20an%20office%20appointment%20at%20SCO-35%20Zirakpur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-exec-wa"
              >
                <i className="fa-solid fa-calendar-check"></i> Book Office Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}