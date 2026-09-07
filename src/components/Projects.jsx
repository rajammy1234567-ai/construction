import React, { useState } from "react";
import "../styles/Projects.css";
import proj1 from "../assets/project1.jpg";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";

const projectsList = [
  {
    id: 1,
    category: "High-Rise",
    title: "Skyline Height Towers (G+15)",
    location: "Zirakpur - VIP Road",
    type: "RCC Framed High-Rise Structural Design",
    specs: "Seismic Zone IV &bull; ETABS 3D Analysis &bull; Raft Foundation",
    image: heroImg
  },
  {
    id: 2,
    category: "Industrial PEB",
    title: "Mega PEB Warehouse & Factory Shed",
    location: "Industrial Corridor, Punjab",
    type: "Pre-Engineered Building (PEB)",
    specs: "65,000 Sq. Ft &bull; 15-Ton Overhead Crane &bull; Steel Portals",
    image: proj1
  },
  {
    id: 3,
    category: "Commercial",
    title: "High Street Commercial Plaza",
    location: "High Street Market, Zirakpur",
    type: "Architecture & Structural Optimization",
    specs: "Basement + 4 Floors &bull; Post-Tensioned Slabs",
    image: aboutImg
  },
  {
    id: 4,
    category: "Residential",
    title: "Imperial Grandeur Luxury Villa",
    location: "VIP Road Enclave, Zirakpur",
    type: "Architectural & Structural Engineering",
    specs: "6,500 Sq. Ft &bull; Double Height Living",
    image: proj1
  },
  {
    id: 5,
    category: "Chartered Engineer",
    title: "Industrial Plant Stability Audit",
    location: "Dera Bassi - Mohali Belt",
    type: "Chartered Stability Inspection",
    specs: "NDT Rebound Hammer &bull; Form A Certificate",
    image: heroImg
  },
  {
    id: 6,
    category: "Valuation",
    title: "Commercial Property Asset Valuation",
    location: "Chandigarh & Punjab",
    type: "Bank Collateral & Visa Net Worth",
    specs: "Official Bank-Approved Market Valuation",
    image: aboutImg
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === filter);

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-tag">
            <span className="dot"></span>
            Portfolio
          </div>
          <h2 className="section-title">
            Featured <span>Structural & Architectural</span> Works
          </h2>
          <p className="section-subtitle">
            Demonstrating structural resilience and architectural excellence across sectors.
          </p>

          <div className="portfolio-filters">
            {["All", "High-Rise", "Industrial PEB", "Commercial", "Residential"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => {
                  setFilter(cat);
                  setShowAll(false);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {displayed.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} />
                <span className="project-tag">{project.category}</span>
                <div className="project-overlay">
                  <a
                    href="https://wa.me/917986850367?text=Hello%20Er.%20Vijay%20Kumar%20Gupta,%20I%20saw%20your%20portfolio%20project%20and%20want%20to%20discuss%20a%20similar%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-overlay-inquire"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Inquire Project
                  </a>
                </div>
              </div>

              <div className="project-details">
                <span className="project-location">
                  <i className="fa-solid fa-location-dot"></i> {project.location}
                </span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-type">{project.type}</p>
                <div
                  className="project-specs"
                  dangerouslySetInnerHTML={{ __html: project.specs }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 3 && (
          <div className="projects-toggle-wrap">
            <button
              className="btn-view-toggle"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
              <i className={`fa-solid fa-chevron-${showAll ? "up" : "down"}`}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}