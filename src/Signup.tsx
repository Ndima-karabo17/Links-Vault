import React from 'react';
import pic1 from './assets/side-pic.png';
import './Styles.css'; 

const Signup: React.FC = () => {
  return (
    <div className="signup-div">
      <div className="form-div">
        <h1>Sign up with email</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input type="email" className="input" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" className="input" />
          </label>
          <label htmlFor="confirm-password">
            Confirm Password:
            <input type="password" className="input" />
          </label>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>

      <div className="image-div">
        <img src={pic1} alt="Side Picture" />
      </div>
    </div>
  );
};

export default Signup;
