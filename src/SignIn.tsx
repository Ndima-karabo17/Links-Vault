import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // New state for the message
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    

    console.log("Signing in with:", email, password);
    
    setIsSuccess(true);

  
    setTimeout(() => {
      navigate('/add-link');
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        {isSuccess ? (
          <div className="loading-state">
            <div className="spinner"></div> 
            <h2 className="success-text">Successfully Signed In</h2>
            <p>Redirecting to add link...</p>
          </div>
        ) : (
          <>
            <h1 className="auth-heading">Welcome Back</h1>
            <p className="auth-subheading">Enter your details to access your links.</p>

            <form onSubmit={handleSignIn} className="auth-form">
              <div className="input-group">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="ndima.co.za"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">I agree to the Terms & Privacy</label>
              </div>

              <button type="submit" className="auth-button">Sign In</button>
            </form>

            <p className="auth-footer">
              Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
