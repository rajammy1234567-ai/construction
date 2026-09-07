import React from "react";
import "../styles/FloatingActions.css";

export default function FloatingActions() {
  return (
    <div className="floating-wa-wrapper">
      <a
        href="https://wa.me/917986850367?text=Hello%20Highrise%20Structural%20Consultants,%20I%20would%20like%20to%20consult%20regarding%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        title="Chat with Er. Vijay Kumar Gupta on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="wa-chip">WhatsApp Us</span>
      </a>
    </div>
  );
}
