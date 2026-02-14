import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(); // Added a ref for EmailJS
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false); // To show a loading state on the button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS IDs
    const serviceId = 'YOUR_SERVICE_ID'; 
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully! We will get back to you soon.');
          setFormData({ name: '', email: '', message: '' }); // Clear the form
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong. Please try again later.');
          setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      
      {/* HEADER */}
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We are here to help with all your tax and financial needs.</p>
      </div>

      <div className="contact-container">
        
        {/* LEFT SIDE: CONTACT INFO CARDS */}
        <div className="contact-info-grid">
          
          {/* THE FIX: Wrapped in an <a> tag with tel: */}
          <a href="tel:+919398989401" className="contact-card-link" style={{ textDecoration: 'none' }}>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 9398989401</p>
            </div>
          </a>

          {/* THE FIX: Wrapped in an <a> tag with mailto: */}
          <a href="mailto:sonshruva@gmail.com" className="contact-card-link" style={{ textDecoration: 'none' }}>
            <div className="contact-card">
              <div className="contact-icon">✉</div>
              <h3>Email Us</h3>
              <p>sonshruva@gmail.com</p>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Hyderabad, Telangana, India</p>
          </div>

        </div>

        <div className="contact-form-wrapper">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Send a Message</h2>
            
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="email address"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">How can we help you?</label>
              <textarea 
                id="message" 
                name="message" /* Must match the {{message}} in your EmailJS template */
                rows="5" 
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>

            {/* Added dynamic button text based on sending state */}
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;