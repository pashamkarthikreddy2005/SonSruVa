import React from 'react';
import './AboutUs.css';


const featuresData = [
  { icon: "🧑‍💼", title: "Expert Team", description: "Our certified tax consultants and financial advisors have years of experience in handling diverse tax scenarios." },
  { icon: "🎯", title: "Personalized Solutions", description: "We provide tailored services for individuals, startups, and businesses to ensure optimal results." },
  { icon: "⏱️", title: "Timely Compliance", description: "We ensure all GST, tax filings, and regulatory requirements are completed accurately and on time." },
  { icon: "🤝", title: "Client-Centric Approach", description: "Your satisfaction is our priority. We provide transparent, reliable, and professional guidance." }
];

const AboutUs = () => {
  return (
    <div className="about-page">
      
      {/* HEADER SECTION */}
      <div className="about-header">
        <h1 className="about-title">About SonShruVa</h1>
        <p className="about-subtitle">Empowering your financial future. Complexity made simple.</p>
      </div>

      {/* MISSION STATEMENT */}
      <div className="about-mission-card">
        <h2>Our Mission</h2>
        <p>
          At <strong>SonShruVa Advisors</strong>, we pride ourselves on delivering reliable tax solutions, GST filing, and business consulting tailored to your specific needs. We are committed to ensuring financial clarity, compliance, and strategic growth for individuals and businesses alike.
        </p>
      </div>

      {/* WHY CHOOSE US */}
      <div className="features-section">
        <h2 className="section-heading">Why Choose Us</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;