import React from 'react';
import pic1 from './assets/side-pic.png';
import './Styles.css';

const SignIn: React.FC = () => {
  return (
    <div className="all">
      <h1 className="signup-heading">Sign in with email</h1>
      <div className="signup-div">

        <div className="form-div">
          <form>
            <label htmlFor="email">
              Email:
              <input type="email" className="input" readOnly/>
            </label>

            <label htmlFor="password">
              Password:
              <input type="password" className="input" required/>
            </label>

            <label htmlFor="privacy" className="checkbox-label">
              <input type="checkbox" className="checkbox" required/>
              I agree to the Terms & Privacy
            </label>

            <button type="submit" className="submit-btn">Sign In</button>

            <p className="redirect-text">
              Don't have an account? <button className="link-button">Sign Up</button>
            </p>
          </form>
        </div>

        <div className="image-div">
          <img src={pic1} alt="Side visual" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
