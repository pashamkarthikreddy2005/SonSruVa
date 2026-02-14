import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate('/services');
  };

  return (
    <div className="hero-section">
      <h1 className="hero-title">SonShruVa Advisors</h1>
      
      <p className="hero-subtitle">
        Your trusted partner in tax clarity
      </p>
      
      <button className="hero-btn" onClick={handleExploreClick}>
        Explore Services
      </button>
    </div>
  );
};

export default Home;