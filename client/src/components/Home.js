// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Financial Analytics Platform</h1>
        <p>Your ultimate solution for AI-powered financial insights and analytics.</p>
        <Link to="/register" className="cta-btn">Get Started</Link>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Advanced Analytics</h3>
            <p>Get detailed insights into your financial data with our advanced analytics tools.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-lock"></i>
            <h3>Secure Transactions</h3>
            <p>Your data security is our top priority. We ensure all your transactions are safe and secure.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Friendly</h3>
            <p>Access your financial data on the go with our mobile-friendly platform.</p>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Financial Analytics Platform. All rights reserved.</p>
        <Link to="/login" className="footer-link">Login</Link>
        <Link to="/register" className="footer-link">Register</Link>
      </footer>
    </div>
  );
};

export default Home;
