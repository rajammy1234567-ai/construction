import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Founder from "./components/Founder";
import Services from "./components/Services";
import Credentials from "./components/Credentials";
import Estimator from "./components/Estimator";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <Services />
      <Credentials />
      <Estimator />
      <Projects />
      <Contact />
      <FloatingActions />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}