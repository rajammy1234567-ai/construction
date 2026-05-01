import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      
      {/* Logo */}
      <h2 className="logo">
        Build<span>Master</span>
      </h2>

      {/* Links */}
      <div className={`nav-links ${menu ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenu(false)}>About</a>
        <a href="#services" onClick={() => setMenu(false)}>Services</a>
        <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
        <a className='navbtn' href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </div>

      {/* Menu Icon */}
      <div className={`menu-btn ${menu ? "open" : ""}`} onClick={() => setMenu(!menu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}