import React from "react";
import "../styles/Hero.css";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="hero" className="hero-img" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          We Build <span>Your Dream</span>
        </h1>

        <p className="hero-subtitle">
          Professional Construction Services with Quality & Trust
        </p>

        <div className="hero-buttons">
          <button
            className="btn primary"
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get Started
          </button>
          <button
            className="btn secondary"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}
