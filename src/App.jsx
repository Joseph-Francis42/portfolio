import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  const currentYear = new Date().getFullYear();
  const { name } = portfolioData.personalInfo;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-copy">
            <span className="footer-highlight">© {currentYear} {name}</span>
            <span>All rights reserved. Built with React and Vanilla CSS.</span>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#resume" className="footer-link">Resume</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
