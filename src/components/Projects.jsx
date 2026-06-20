import React from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card" id={`project-card-${project.id}`}>
              <div className="project-img-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${project.imagePath.replace(/^\//, '')}`}
                  alt={`${project.title} Mockup Preview`}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-img-overlay"></div>
              </div>
              <div className="project-info">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="project-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.codeLink && project.codeLink !== '#' && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-item"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Code
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== '#' && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-item"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
