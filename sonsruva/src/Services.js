import React from 'react';
import './Services.css';

const servicesData = [
  { title: "Income Tax Filing", description: "Hassle-free filing of personal and corporate income tax returns." },
  { title: "GST Registration & Return Filing", description: "Complete GST solutions including registration and filing for businesses and individuals." },
  { title: "Accounting & Bookkeeping Services", description: "Professional bookkeeping and accounting for smooth financial management." },
  { title: "TDS & TCS Returns", description: "Accurate filing of Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) returns." },
  { title: "PAN & Tax Services", description: "PAN card applications, corrections, and other tax-related services." },
  { title: "ESIC & EPFO Registration & Returns", description: "Compliance management for employee social security and provident fund." },
  { title: "PF Contribution & Withdrawal", description: "Guidance and processing for Provident Fund contributions and withdrawals." },
  { title: "Project Report & CMA Data", description: "Preparation of project reports and Cost & Management Accounting data for banks and lenders." },
  { title: "Company Incorporation & ROC Filing", description: "Registration of new companies and compliance with Registrar of Companies." },
  { title: "Firm Registration", description: "Complete registration for sole proprietorships, partnerships, and LLPs." },
  { title: "Labour Registration", description: "Labour law compliance for shops, establishments, and factories." },
  { title: "DSC - Digital Signature", description: "Issuance of digital signatures for directors, professionals, and businesses." },
  { title: "Food License", description: "Basic, state, and manufacturer food license registration under FSSAI." },
  { title: "Visa Certifications", description: "Documentation and certifications for visas and immigration purposes." },
  { title: "Import & Export Code (IEC)", description: "Apply for IEC for import/export business to comply with DGFT regulations." },
  { title: "MSME Certificate or Udyam Certificate", description: "Obtain MSME or Udyam registration for your business to avail benefits and compliance." }
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Comprehensive financial and compliance solutions for individuals and businesses.</p>
      </div>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-wrapper">
              {/* Formats numbers as 01, 02, etc. */}
              <span className="service-number"></span> 
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;