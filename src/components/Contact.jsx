import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, github, linkedin, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-layout">
          {/* Left panel: Info */}
          <div className="contact-info-panel">
            <p className="contact-info-desc">
              I'm open to discussing new software development opportunities, open-source projects, or collaboration inquiries. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-detail-text-title">Email</span>
                  <div className="contact-detail-text-val">
                    <a href={`mailto:${email}`} id="contact-email-link">{email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-detail-text-title">Location</span>
                  <div className="contact-detail-text-val">{location}</div>
                </div>
              </div>
            </div>

            <div>
              <span className="contact-detail-text-title" style={{ display: 'block', marginBottom: '0.75rem' }}>
                Follow Me
              </span>
              <div className="social-links">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="social-btn" id="github-link" aria-label="GitHub Profile">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" id="linkedin-link" aria-label="LinkedIn Profile">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name-input" className="form-label">Name</label>
              <input
                type="text"
                id="name-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Name"
                style={{ borderColor: errors.name ? '#ef4444' : '' }}
              />
              {errors.name && (
                <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email-input" className="form-label">Email</label>
              <input
                type="email"
                id="email-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                style={{ borderColor: errors.email ? '#ef4444' : '' }}
              />
              {errors.email && (
                <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message-input" className="form-label">Message</label>
              <textarea
                id="message-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Message..."
                style={{ borderColor: errors.message ? '#ef4444' : '' }}
              />
              {errors.message && (
                <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.message}
                </span>
              )}
            </div>

            {status === 'success' && (
              <div className="form-status success">
                <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error">
                <AlertCircle size={18} /> There was an error sending the message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
              style={{ width: 'fit-content', alignSelf: 'flex-start' }}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
