import React, { useEffect, useState, useRef } from 'react';
import { Code, Terminal, Cpu, Globe, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Setup observer to trigger progress bar animations when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getSkillIcon = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('java')) return <Code size={22} />;
    if (lowercaseName.includes('python')) return <Terminal size={22} />;
    if (lowercaseName.includes('c programming') || lowercaseName === 'c') return <Cpu size={22} />;
    if (lowercaseName.includes('html') || lowercaseName.includes('css')) return <Globe size={22} />;
    if (lowercaseName.includes('sql') || lowercaseName.includes('database')) return <Database size={22} />;
    return <Layers size={22} />;
  };

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-card" id={`skill-${index}`}>
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  {getSkillIcon(skill.name)}
                </div>
                <div>
                  <h3 className="skill-title">{skill.name}</h3>
                  <span className="skill-level-text">{skill.level}% Proficiency</span>
                </div>
              </div>
              <p className="skill-desc">{skill.description}</p>
              <div className="skill-bar-wrapper">
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{
                      transform: animate ? `scaleX(${skill.level / 100})` : 'scaleX(0)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
