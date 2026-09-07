import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logoSvg from "../assets/highrise-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* Clean Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-left">
            <span className="gst-pill">
              <i className="fa-solid fa-shield-check"></i>
              GST No. <strong>03AASFH4684B1ZD</strong>
            </span>
            <span className="top-location">
              <i className="fa-solid fa-location-dot"></i>
              SCO-35, High Street Market, VIP Road, Zirakpur
            </span>
          </div>

          <div className="top-right">
            <a href="tel:+917986850367" className="top-link">
              <i className="fa-solid fa-phone"></i> +91 79868 50367
            </a>
            <span className="top-sep">|</span>
            <a href="mailto:vjg183@gmail.com" className="top-link">
              <i className="fa-solid fa-envelope"></i> vjg183@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-row">
          {/* Logo & Brand */}
          <a href="#" className="nav-brand" onClick={closeMenu}>
            <div className="logo-box">
              <img src={logoSvg} alt="Highrise Structural Consultants" />
            </div>
            <div className="brand-copy">
              <span className="brand-main">HIGHRISE</span>
              <span className="brand-sub">STRUCTURAL CONSULTANTS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-desktop">
            <li><a href="#services" className="nav-item">Services</a></li>
            <li><a href="#founder" className="nav-item">Er. Vijay Kumar Gupta</a></li>
            <li><a href="#credentials" className="nav-item">Valuation & CE</a></li>
            <li><a href="#projects" className="nav-item">Projects</a></li>
            <li><a href="#estimator" className="nav-item">Fee Estimator</a></li>
            <li><a href="#contact" className="nav-item">Contact</a></li>
          </ul>

          {/* Desktop Right CTA */}
          <div className="nav-cta-desktop">
            <a href="tel:+917986850367" className="btn-call-nav">
              <i className="fa-solid fa-phone"></i>
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20would%20like%20to%20consult%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-nav"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="drawer-brand">
            <img src={logoSvg} alt="Highrise Logo" />
            <div>
              <strong>HIGHRISE</strong>
              <span>STRUCTURAL CONSULTANTS</span>
            </div>
          </div>
          <button className="drawer-close" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-drawer-links">
          <a href="#services" onClick={closeMenu}>
            <i className="fa-solid fa-cubes"></i> 6 Core Services
          </a>
          <a href="#founder" onClick={closeMenu}>
            <i className="fa-solid fa-user-graduate"></i> Er. Vijay Kumar Gupta (Ph.D USA)
          </a>
          <a href="#credentials" onClick={closeMenu}>
            <i className="fa-solid fa-certificate"></i> Chartered Engineer & Valuation
          </a>
          <a href="#projects" onClick={closeMenu}>
            <i className="fa-solid fa-building"></i> Featured Projects
          </a>
          <a href="#estimator" onClick={closeMenu}>
            <i className="fa-solid fa-calculator"></i> Fee Estimator
          </a>
          <a href="#contact" onClick={closeMenu}>
            <i className="fa-solid fa-location-dot"></i> Contact & Location
          </a>
        </div>

        <div className="mobile-drawer-footer">
          <div className="drawer-contact-info">
            <p><i className="fa-solid fa-phone"></i> +91 79868 50367</p>
            <p><i className="fa-solid fa-envelope"></i> vjg183@gmail.com</p>
            <p className="drawer-addr">
              <i className="fa-solid fa-map-pin"></i> SCO-35, Ground Floor, Opp. VIP Road, High Street Market, Zirakpur
            </p>
          </div>
          <a
            href="https://wa.me/917986850367?text=Hello%20Highrise%20Structural%20Consultants,%20I%20want%20to%20consult%20regarding%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-drawer-wa"
          >
            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}