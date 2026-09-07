import React, { useState } from "react";
import "../styles/Services.css";

const servicesList = [
  {
    id: "structural-design",
    category: "STRUCTURAL DESIGN",
    title: "Structural Design & Engineering",
    icon: "fa-solid fa-cubes",
    badge: "Core Specialty",
    summary:
      "Full RCC and steel structural engineering, finite element modeling, and high-rise wind & seismic compliance by Er. Vijay Kumar Gupta.",
    deliverables: [
      "RCC & Post-Tensioned (PT) Slabs",
      "Earthquake Resistant Design (IS 1893:2016)",
      "High-Rise Wind & Dynamic Analysis",
      "ETABS & STAAD.Pro Computer Modeling"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I need Structural Design consultancy for my building project."
  },
  {
    id: "architecture",
    category: "ARCHITECTURE",
    title: "Architectural Planning & 3D Elevation",
    icon: "fa-solid fa-compass-drafting",
    badge: "Modern Architecture",
    summary:
      "Modern 2D working drawings, photorealistic 3D elevations, spatial flow optimization, and municipal authority building sanctions.",
    deliverables: [
      "2D Floor Plans & Working Drawings",
      "Photorealistic 3D Exterior Elevations",
      "Municipal Sanction & Approval Drawings",
      "Vastu-Compliant Space Optimization"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I require Architectural Planning & 3D Elevation services."
  },
  {
    id: "estimate",
    category: "ESTIMATE",
    title: "Cost Estimation & Quantity Surveying",
    icon: "fa-solid fa-calculator",
    badge: "Accurate Budgeting",
    summary:
      "Item-wise Bill of Quantities (BOQ), material consumption calculations, and bank loan valuation estimates to safeguard against cost overruns.",
    deliverables: [
      "Detailed Item-wise BOQ",
      "Bank Loan Construction Estimates",
      "Material Schedule (Steel, Cement, Aggregates)",
      "Vendor Milestone Payment Schedule"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I need Cost Estimation and BOQ preparation."
  },
  {
    id: "industrial",
    category: "INDUSTRIAL",
    title: "Industrial & Pre-Engineered Buildings (PEB)",
    icon: "fa-solid fa-industry",
    badge: "Heavy Infrastructure",
    summary:
      "Design and engineering for pre-engineered steel buildings (PEB), factory sheds with heavy overhead EOT cranes, and large-span warehouses.",
    deliverables: [
      "PEB Steel Shed Structural Design",
      "Overhead Crane Gantry Girder Engineering",
      "Heavy Industrial Factory Layouts",
      "Large-Span Warehouse Portal Frames"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I want to consult for Industrial PEB Shed design."
  },
  {
    id: "valuation",
    category: "VALUATION",
    title: "Govt. Approved Property Valuation",
    icon: "fa-solid fa-scale-balanced",
    badge: "Govt. Registered",
    summary:
      "Accredited valuation reports for bank loan mortgage collateral, VISA net worth certification (USA, Canada, UK, Australia), and capital gains tax.",
    deliverables: [
      "Bank Loan Mortgage Valuation",
      "VISA & Immigration Net Worth Certificates",
      "Capital Gains Tax Property Valuation",
      "Fair Market Value (FMV) Certification"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I need an official Property Valuation / Net Worth Certificate."
  },
  {
    id: "chartered-engineer",
    category: "CHARTERED ENGINEER",
    title: "Chartered Engineer (CE) Certificates",
    icon: "fa-solid fa-stamp",
    badge: "Official Seal",
    summary:
      "Statutory issuance of Structural Stability Certificates (Form A / Form 1), factory safety clearances, and plant machinery inspection audits.",
    deliverables: [
      "Structural Stability Certificate (Form A / 1)",
      "Factory Licensing & Safety Audits",
      "Commercial Building Fitness Certificates",
      "Heavy Machinery & Plant Valuation"
    ],
    whatsappMsg: "Hello Er. Vijay Kumar Gupta, I require a Chartered Engineer Structural Stability Certificate."
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesList[0].id);

  const current = servicesList.find((s) => s.id === activeTab) || servicesList[0];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-tag">
            <span className="dot"></span>
            Poster Disciplines
          </div>
          <h2 className="section-title">
            Our <span>6 Core Engineering</span> Verticals
          </h2>
          <p className="section-subtitle">
            All disciplines personally supervised and certified by Er. Vijay Kumar Gupta (Ph.D USA).
          </p>
        </div>

        {/* Responsive Horizontal Tabs */}
        <div className="services-tab-nav">
          {servicesList.map((svc) => (
            <button
              key={svc.id}
              className={`tab-pill-btn ${activeTab === svc.id ? "active" : ""}`}
              onClick={() => setActiveTab(svc.id)}
            >
              <i className={svc.icon}></i>
              <span>{svc.category}</span>
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="active-service-card">
          <div className="active-card-top">
            <div className="active-icon">
              <i className={current.icon}></i>
            </div>
            <div>
              <span className="active-cat-tag">{current.category}</span>
              <h3 className="active-title">{current.title}</h3>
            </div>
            <span className="active-badge">{current.badge}</span>
          </div>

          <p className="active-desc">{current.summary}</p>

          <div className="active-deliverables-grid">
            {current.deliverables.map((item, idx) => (
              <div key={idx} className="deliv-chip">
                <i className="fa-solid fa-circle-check"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="active-card-footer">
            <div className="footer-cert-note">
              <i className="fa-solid fa-stamp"></i>
              <span>Certified by <strong>Er. Vijay Kumar Gupta (Ph.D USA)</strong> &bull; GSTIN 03AASFH4684B1ZD</span>
            </div>
            <a
              href={`https://wa.me/917986850367?text=${encodeURIComponent(current.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-inquire-service"
            >
              <i className="fa-brands fa-whatsapp"></i> Inquire This Service
            </a>
          </div>
        </div>

        {/* Quick Grid of all 6 Services on mobile/desktop */}
        <div className="services-quick-row">
          {servicesList.map((svc) => (
            <div
              key={svc.id}
              className={`quick-item ${activeTab === svc.id ? "highlight" : ""}`}
              onClick={() => setActiveTab(svc.id)}
            >
              <i className={svc.icon}></i>
              <strong>{svc.category}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}