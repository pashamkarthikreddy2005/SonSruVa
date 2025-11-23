import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import StarBackground from './StarBackground';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

// src/App.js
// ... imports ...

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <StarBackground />
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;