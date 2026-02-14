// src/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <nav className="navbar">
      
      <div className="nav-logo">
        {/* THE FIX: Removed inline styles and added className="logo-link" */}
        <Link to="/" className="logo-link">
            {/* Ensure your image path is correct, e.g., /logo.png or /logo.jpeg */}
            <img src="/logo.jpeg" alt="SonShruVa Logo" className="logo-image" />
            <span className="logo-text">SonShruVa</span>
        </Link>
      </div>

      <ul className="nav-menu">
        {navLinks.map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <li key={item}>
              <Link 
                to={path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>
  );
};

export default Navbar;