// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* --- TOP SECTION: Compact Header --- */}
        <div className="footer-top-centered">
            <h2 className="brand-title">SonSruVa</h2>
            <p className="brand-statement">
                Empowering your financial future. Complexity made simple.
            </p>
        </div>

        {/* --- HORIZONTAL DIVIDER --- */}
        <div className="horizontal-line"></div>

        {/* --- BOTTOM SECTION: Side-by-Side Columns --- */}
        <div className="footer-split-section">
            
            {/* LEFT BLOCK: Explore */}
            <div className="split-block left-align">
                <h3 className="block-title">Explore</h3>
                <nav className="footer-nav-col">
                    <a href="/" className="footer-link">Home</a>
                    <a href="/services" className="footer-link">Services</a>
                    <a href="/about" className="footer-link">About</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </nav>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="vertical-line"></div>

            {/* RIGHT BLOCK: Connect */}
            <div className="split-block right-align">
                <h3 className="block-title">Connect</h3>
                
                <div className="contact-details">
                    <p>+91 98765 43210</p>
                    <p>support@sonsruva.com</p>
                    
                    <div className="location-box">
                        <svg className="loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>Hitech City, Hyd</span>
                    </div>
                </div>

                <div className="social-row">
                    <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                    <SocialIcon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-3.86-1.66c-3.15 0-5.69 2.57-5.69 5.76 0 .45.05.89.15 1.32-4.74-.24-8.94-2.5-11.75-6a5.75 5.75 0 0 0-.77 2.87c0 2 .99 3.75 2.5 5.03a5.64 5.64 0 0 1-2.58-.72v.07c0 2.78 1.95 5.1 4.54 5.62a5.66 5.66 0 0 1-2.57.1 5.7 5.7 0 0 0 5.3 4 11.4 11.4 0 0 1-7.07 2 12 12 0 0 1-1.36-.08 16.08 16.08 0 0 0 8.7 2.56c10.45 0 16.17-8.77 16.17-16.34 0-.25-.01-.5-.02-.75A11.48 11.48 0 0 0 23 3z" />
                    <SocialIcon path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.65 6.35a1.65 1.65 0 1 1-1.65 1.65 1.65 1.65 0 0 1 1.65-1.65z M21 16.8a5.2 5.2 0 0 1-5.2 5.2H8.2a5.2 5.2 0 0 1-5.2-5.2V7.2a5.2 5.2 0 0 1 5.2-5.2h7.6a5.2 5.2 0 0 1 5.2 5.2v9.6z" />
                </div>
            </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        © {new Date().getFullYear()} SonSruVa. All rights reserved.
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