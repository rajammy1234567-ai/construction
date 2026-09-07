import React, { useState } from "react";
import "../styles/Estimator.css";

export default function Estimator() {
  const [service, setService] = useState("Structural Design");
  const [projectType, setProjectType] = useState("Residential G+3");
  const [area, setArea] = useState(2500);

  const getCalculatedDetails = () => {
    switch (service) {
      case "Structural Design":
        return {
          rateText: "Standard Engineering Package",
          timeline: "3 - 7 Working Days",
          includes: ["STAAD/ETABS Analysis", "Seismic IS 1893 Check", "BBS & Column/Beam Detailing", "Er. Vijay Kumar Gupta Sign-off"]
        };
      case "Architecture":
        return {
          rateText: "Architectural & 3D Visuals",
          timeline: "5 - 10 Working Days",
          includes: ["2D Floor Plans", "3D Front Elevation", "Municipal Approval Drawings", "Ventilation & Vastu Harmony"]
        };
      case "Estimate":
        return {
          rateText: "Complete BOQ & Cost Audit",
          timeline: "2 - 4 Working Days",
          includes: ["Detailed Bill of Quantities", "Material Schedule (Steel/Cement)", "Bank Loan Fitment Format", "Labor & Vendor Costing"]
        };
      case "Industrial":
        return {
          rateText: "PEB & Heavy Shed Detailing",
          timeline: "7 - 14 Working Days",
          includes: ["Portal Frame & Crane Gantry", "Foundation / Pedestal Design", "Steel Truss & Purlin Layout", "Wind Load Analysis"]
        };
      case "Valuation":
        return {
          rateText: "Certified Govt. Approved Valuation",
          timeline: "1 - 3 Working Days",
          includes: ["Site Physical Inspection", "Bank / Embassy Format Report", "Land & Building Fair Value", "Authorized Seal & Signature"]
        };
      case "Chartered Engineer":
        return {
          rateText: "Official Stability Certification",
          timeline: "2 - 5 Working Days",
          includes: ["Form A / Form 1 Documentation", "Structural Health Audit", "Factory Licensing Approval", "Authorized Chartered Seal"]
        };
      default:
        return {
          rateText: "Custom Consultation",
          timeline: "3 - 5 Working Days",
          includes: ["Technical Assessment", "Preliminary Drawings", "Site Consultation", "Formal Quote"]
        };
    }
  };

  const details = getCalculatedDetails();

  const handleWhatsAppQuote = () => {
    const message = `Hello Er. Vijay Kumar Gupta, I used the Cost Estimator on Highrise Structural Consultants website:%0A%0A*Service:* ${service}%0A*Project Type:* ${projectType}%0A*Approx Area:* ${area} Sq. Ft.%0A*Estimated Timeline:* ${details.timeline}%0A%0APlease provide your official quote and consultation schedule.`;
    window.open(`https://wa.me/917986850367?text=${message}`, "_blank");
  };

  return (
    <section className="estimator-section" id="estimator">
      <div className="container">
        <div className="estimator-header">
          <div className="section-tag">
            <span className="dot"></span>
            Instant Project Consultation
          </div>
          <h2 className="section-title">
            Structural & Service <span>Fee Estimator</span>
          </h2>
          <p className="section-subtitle">
            Configure your project parameters to receive immediate clarity on deliverables, 
            timeline, and connect directly with Er. Vijay Kumar Gupta.
          </p>
        </div>

        <div className="estimator-box">
          <div className="estimator-controls">
            {/* Service Select */}
            <div className="form-group">
              <label><i className="fa-solid fa-list-check"></i> Select Required Discipline</label>
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="Structural Design">Structural Design & Analysis</option>
                <option value="Architecture">Architecture & 3D Elevation</option>
                <option value="Estimate">Cost Estimate & BOQ</option>
                <option value="Industrial">Industrial PEB / Factory Shed</option>
                <option value="Valuation">Govt. Approved Property Valuation</option>
                <option value="Chartered Engineer">Chartered Engineer Stability Certificate</option>
              </select>
            </div>

            {/* Project Type */}
            <div className="form-group">
              <label><i className="fa-solid fa-building"></i> Structure / Project Type</label>
              <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option value="Residential Villa / House">Residential Villa / Independent Floor</option>
                <option value="Residential G+3 / Apartment">Residential G+3 / Multi-Story Apartment</option>
                <option value="Commercial Complex / Mall">Commercial Showroom / Complex / SCO</option>
                <option value="Industrial Factory / PEB Shed">Industrial Shed / PEB Warehouse</option>
                <option value="Hospital / School / Institutional">Hospital / School / Institutional</option>
                <option value="Property Valuation for Visa/Bank">Property Valuation for Visa / Bank Loan</option>
              </select>
            </div>

            {/* Built-up Area Slider */}
            <div className="form-group">
              <div className="slider-label">
                <label><i className="fa-solid fa-ruler-combined"></i> Built-up / Plot Area</label>
                <span className="slider-value">{Number(area).toLocaleString()} Sq. Ft.</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="250"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="area-slider"
              />
              <div className="slider-scale">
                <span>500 sq.ft</span>
                <span>25,000 sq.ft</span>
                <span>50,000+ sq.ft</span>
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="estimator-result">
            <div className="result-header">
              <span className="result-tag">Preliminary Overview</span>
              <h3>{service}</h3>
              <p className="result-type">{projectType} &bull; {Number(area).toLocaleString()} Sq. Ft.</p>
            </div>

            <div className="result-metrics">
              <div className="metric-box">
                <span className="metric-title">Estimated Delivery</span>
                <span className="metric-val"><i className="fa-solid fa-clock"></i> {details.timeline}</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">Quality Assurance</span>
                <span className="metric-val"><i className="fa-solid fa-stamp"></i> USA Ph.D Verified</span>
              </div>
            </div>

            <div className="result-includes">
              <h4>Deliverables Covered:</h4>
              <ul>
                {details.includes.map((inc, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle-check"></i> {inc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="result-actions">
              <button onClick={handleWhatsAppQuote} className="btn-whatsapp btn-full">
                <i className="fa-brands fa-whatsapp"></i> Get Official Quote on WhatsApp
              </button>
              <a href="tel:+917986850367" className="btn-call-outline">
                <i className="fa-solid fa-phone"></i> Direct Call: +91 79868 50367
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
