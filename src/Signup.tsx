import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Styles.css';

interface User {
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
      return;
    }

    const newUser: User = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setError(null);
    setSuccess(true);

    
    setTimeout(() => navigate('/signin'), 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className='auth-heading'>Create Account</h1>
        <p className="auth-subheading">Sign up with your email to be able to save you links for future use</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-box">{error}</div>}
          {success && <div className="success-box">Account created! Redirecting...</div>}

          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        
        <p className="auth-footer">
          Already have an account? <span onClick={() => navigate('/signin')}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
