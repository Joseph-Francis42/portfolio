import React from 'react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const handleDownload = () => {
    // Elegant fallback: triggers browser print dialog for an instant PDF save of the portfolio
    window.print();
  };

  return (
    <section id="resume">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career & Education</span>
          <h2 className="section-title">My Resume</h2>
        </div>

        <div className="resume-layout">
          {/* Experience Column */}
          <div>
            <h3 className="timeline-column-title">
              <Briefcase size={22} style={{ color: 'var(--accent)' }} /> Experience
            </h3>
            <div className="timeline">
              {portfolioData.experience.map((item, index) => (
                <div key={index} className="timeline-item" id={`exp-${index}`}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.role}</h4>
                  <h5 className="timeline-subtitle">{item.company}</h5>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="timeline-column-title">
              <GraduationCap size={24} style={{ color: 'var(--accent)' }} /> Education
            </h3>
            <div className="timeline">
              {portfolioData.education.map((item, index) => (
                <div key={index} className="timeline-item" id={`edu-${index}`}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <h5 className="timeline-subtitle">{item.institution}</h5>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <button onClick={handleDownload} className="btn btn-outline" id="download-resume-btn">
            <Download size={16} /> Print / Save Resume PDF
          </button>
        </div>
      </div>
    </section>
  );
}
