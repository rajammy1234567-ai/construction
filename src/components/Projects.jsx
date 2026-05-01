import React from "react";
import "../styles/Projects.css";
import project from "../assets/project1.jpg";

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <h2>Our Featured Projects</h2>
        <p>Explore our latest high-quality construction work</p>
      </div>

      <div className="project-grid">

        <div className="project-card">
          <img src={project} alt="project" />
          <div className="overlay">
            <h3>Modern Villa</h3>
            <p>Luxury Design</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project} alt="project" />
          <div className="overlay">
            <h3>Office Building</h3>
            <p>Commercial</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project} alt="project" />
          <div className="overlay">
            <h3>Interior Work</h3>
            <p>Creative Design</p>
          </div>
        </div>

      </div>

    </section>
  );
}