import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from './assets/link-pic.png';
import './Styles.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const signInClick = () => {
    navigate('/Signup'); 
  };

  return (
    <div className="page">
      <header>
        <div className="headers">
          <div>
            <button className="service">Services</button>
          </div>
          <div>
            <button className="blog">Blog</button>
          </div>
          <div className="information">
            <button className="contact">Contact Us</button>
            <button className="signIn" onClick={signInClick}>
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="main-div">
          <div className="paragraph">
            <h1 className="heading">
              Empowering you with <br />
              extra space for your <br />
              digital life
            </h1>
          </div>
          <div className="pic">
            <img src={pic1} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

