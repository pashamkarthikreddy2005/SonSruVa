// src/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-top-centered">
          <h2 className="brand-title">SonShruVa</h2>
          <p className="brand-statement">
            Empowering your financial future. Complexity made simple.
          </p>
        </div>

        <div className="horizontal-line"></div>

        <div className="footer-split-section">

          <div className="split-block left-align">
            <h3 className="block-title">Explore</h3>
            <nav className="footer-nav-col">
              <a href="/" className="footer-link">Home</a>
              <a href="/services" className="footer-link">Services</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/contact" className="footer-link">Contact</a>
            </nav>
          </div>

          <div className="vertical-line"></div>

          <div className="split-block right-align">
            <h3 className="block-title">Connect</h3>

            <div className="contact-details">
              <p>+91 9398989401</p>
              <p>+91 9912738248</p>
              <p>+91 8125622302</p>
              <p>sonshruva@gmail.com</p>

              <div className="location-box">
                <svg className="loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Hyderabad, Mahabubnagar</span>
              </div>
            </div>

            <div className="social-row">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/sonshruva-advisors/" target="_blank" rel="noopener noreferrer">
                <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </a>

              {/* Mail */}
              <a href="mailto:sonshruva@gmail.com">
                <SocialIcon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/sonshruva_advisors?igsh=MTRrem0yemJsdGR5ag==" target="_blank" rel="noopener noreferrer">
                <SocialIcon path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.65 6.35a1.65 1.65 0 1 1-1.65 1.65 1.65 1.65 0 0 1 1.65-1.65z M21 16.8a5.2 5.2 0 0 1-5.2 5.2H8.2a5.2 5.2 0 0 1-5.2-5.2V7.2a5.2 5.2 0 0 1 5.2-5.2h7.6a5.2 5.2 0 0 1 5.2 5.2v9.6z" />
              </a>

            </div>
          </div>

        </div>
      </div>

      <div className="copyright-bar">
        © {new Date().getFullYear()} SonShruVa. All rights reserved.
      </div>
    </footer>
  );
};

const SocialIcon = ({ path }) => (
  <div className="social-icon-box">
    <svg className="social-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  </div>
);

export default Footer;