import React from "react";
import "../styles/Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      
      <div className="services-header">
        <h2>Our Premium Services</h2>
        <p>
          We deliver top-quality construction solutions with modern design,
          innovation, and trusted expertise.
        </p>
      </div>

      <div className="services-container">
        
        <div className="service-card">
          <div className="icon">🏠</div>
          <h3>House Construction</h3>
          <p>
            Strong, modern and beautiful homes built with high-quality materials
            and expert craftsmanship.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🏢</div>
          <h3>Commercial Projects</h3>
          <p>
            Offices, malls and commercial buildings designed for durability,
            performance and modern aesthetics.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🎨</div>
          <h3>Interior Design</h3>
          <p>
            Stylish interiors that blend comfort, beauty and functionality to
            create amazing spaces.
          </p>
        </div>

      </div>

    </section>
  );
}