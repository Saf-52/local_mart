import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Local Mart 🛒</h1>
      <p className="home-subtitle">Shop fresh, shop local!</p>
      <div className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/signup" className="home-button">Signup</Link>
      </div>

      <footer className="home-footer">
        <p>
          For any further tech support contact:{' '}
          <a href="mailto:safiafathima2004@gmail.com">safiafathima2004@gmail.com</a>
        </p>
        <p>&copy; 2025 Local Mart</p>
      </footer>
    </div>
  );
};

export default Home;
