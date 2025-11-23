// src/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // <--- Import useLocation
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Gets the current URL info
  const navLinks = ['Home', 'About', 'Contact'];

  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            SonSruVa
        </Link>
      </div>

      {/* Menu Links */}
      <ul className="nav-menu">
        {navLinks.map((item) => {
          // Calculate the path for this item
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          
          // Check if this is the active page
          const isActive = location.pathname === path;

          return (
            <li key={item}>
              <Link 
                to={path} 
                // Add the 'active' class if the paths match
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