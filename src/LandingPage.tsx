import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from './assets/link-pic.png';
import './Styles.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          DigitalSpace
        </div>        
    
        <div className="nav-links">
          <button className="nav-item">Services</button>
          <button className="nav-item">Blog</button>
          <button className="nav-item">Contact Us</button>
        </div>

        <div className="nav-auth">
          <button className="btn-secondary" onClick={() => navigate('/signin')}>
            Sign In
          </button>
          <button className="btn-primary" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
      </nav>

    
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering you with <br />
          
            <span>extra space</span> for your <br />
            digital life
          </h1>
          <p className="hero-subtitle">
            The most secure way to manage your links and digital assets in one organized place.
          </p>
          <div className="hero-btns">
            <button className="btn-primary-lg" onClick={() => navigate('/signup')}>
              Start for free
            </button>
          </div>
        </div>

        <div className="hero-image">
        
          <img src={pic1} alt="Digital illustration" />
        </div>
      </main>


      <footer className="landing-footer">
        <div className="footer-content">
          <p>Developed by <strong>Ndima Mhangwani</strong>  2025 August</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
