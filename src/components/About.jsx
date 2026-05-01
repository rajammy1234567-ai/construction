import React, { useState } from "react";
import "../styles/About.css";
import about from "../assets/about.jpg";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about" id="about">
      
      <div className="about-image">
        <img src={about} alt="about" />
      </div>

      <div className="about-content">
        <h2>
          Building Dreams with <span>Quality & Trust</span>
        </h2>

        <p>
          We are a leading construction company delivering modern architecture,
          durable structures, and innovative designs. Our team ensures every
          project meets the highest standards of quality and safety.
        </p>

        {/* 👇 Extra Content (Toggle) */}
        {showMore && (
          <div className="more-content">
            <p>
              With over a decade of experience, we specialize in residential and
              commercial construction projects. Our mission is to deliver
              excellence with transparency and innovation.
            </p>

            <p>
              From planning to execution, we focus on quality materials,
              advanced techniques, and customer satisfaction. We believe in
              building long-term relationships with our clients.
            </p>
          </div>
        )}

        <div className="about-cards">
          <div className="card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="card">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

        {/* 👇 Button Toggle */}
        <button 
          className="about-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </div>

    </section>
  );
}