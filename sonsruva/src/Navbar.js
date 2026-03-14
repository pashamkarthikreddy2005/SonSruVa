import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src="/logo.jpeg" alt="SonShruVa Logo" className="logo-image" />
        <span className="logo-text">SonShruVa</span>
      </Link>

      <ul className="nav-menu">
        {navLinks.map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;
          return (
            <li key={item}>
              <Link to={path} className={`nav-link ${isActive ? 'active' : ''}`}>
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