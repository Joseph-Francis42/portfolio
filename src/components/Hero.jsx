import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, title, subTitle, bio, tagline } = portfolioData.personalInfo;

  return (
    <section id="home" className="hero">
      {/* Subtle animated background shapes */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-title-prefix">Hi, my name is</span>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-subtitle">{subTitle}</h2>
          <p className="hero-bio">{bio} {tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
