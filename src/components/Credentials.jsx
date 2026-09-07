import React from "react";
import "../styles/Credentials.css";

export default function Credentials() {
  return (
    <section className="credentials-section" id="credentials">
      <div className="container">
        <div className="trust-strip-header">
          <span className="trust-label">Official Legal & Academic Accreditations</span>
        </div>

        <div className="trust-badges-grid">
          {/* Badge 1: GST */}
          <div className="trust-card">
            <div className="trust-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
            <div className="trust-content">
              <span className="trust-tag">Govt. Tax Registration</span>
              <strong>GST: 03AASFH4684B1ZD</strong>
              <p>Official corporate tax invoicing & legal compliance</p>
            </div>
          </div>

          {/* Badge 2: Academic */}
          <div className="trust-card">
            <div className="trust-icon"><i className="fa-solid fa-graduation-cap"></i></div>
            <div className="trust-content">
              <span className="trust-tag">Academic Eminence</span>
              <strong>Ph.D (USA) &bull; M.Tech Civil</strong>
              <p>Er. Vijay Kumar Gupta &bull; Advanced Structural Design</p>
            </div>
          </div>

          {/* Badge 3: Chartered Engineer */}
          <div className="trust-card">
            <div className="trust-icon"><i className="fa-solid fa-stamp"></i></div>
            <div className="trust-content">
              <span className="trust-tag">Statutory Authority</span>
              <strong>Chartered Engineer (CE)</strong>
              <p>Form A & Form 1 Structural Stability Certificates</p>
            </div>
          </div>

          {/* Badge 4: Valuer */}
          <div className="trust-card">
            <div className="trust-icon"><i className="fa-solid fa-landmark"></i></div>
            <div className="trust-content">
              <span className="trust-tag">Financial & Legal</span>
              <strong>Approved Valuer</strong>
              <p>Nationalized banks, VISA immigration & capital gains</p>
            </div>
          </div>
        </div>

        {/* Code compliance pills */}
        <div className="codes-compact-bar">
          <span className="code-label">Standards:</span>
          <span className="c-pill">IS 456 (RCC)</span>
          <span className="c-pill">IS 800 (Steel)</span>
          <span className="c-pill">IS 1893 (Seismic Zone)</span>
          <span className="c-pill">IS 13920 (Ductility)</span>
          <span className="c-pill">ETABS & STAAD Validated</span>
        </div>
      </div>
    </section>
  );
}
