import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [mobileError, setMobileError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobile') {
      // Allow only digits
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, mobile: digitsOnly });
      }
      // Validate length as user types
      if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        setMobileError('Mobile number must be exactly 10 digits.');
      } else {
        setMobileError('');
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setMobileError('Mobile number must be exactly 10 digits.');
      return;
    }

    setIsSending(true);

    const serviceId = 'service_mvj9ooe';
    const templateId = 'template_wtiuv8o';
    const publicKey = 'aZ3pY2unVIh0T8K7Z';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
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

          <a href="tel:+919398989401" className="contact-card-link" style={{ textDecoration: 'none' }}>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 9398989401</p>
            </div>
          </a>

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
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <div className="mobile-input-wrapper">
                <span className="mobile-prefix">+91</span>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  required
                />
              </div>
              {mobileError && <span className="mobile-error">{mobileError}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="message">How Can We Help You?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

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