import React, { useState } from 'react';
import './Styles.css';
import pic1 from './assets/side-pic.png'
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

  
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="all">
      <h1 className='signup-heading'>Sign up with email</h1>
      <div className="signup-div">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             required />
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               required/>
            </label>

            <label htmlFor="confirm-password">
              Confirm Password:
              <input
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              required/>
            </label>

            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">Sign up successful</p>}

            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>

        <div className="image-div">
          <img src={pic1} alt="Side visual" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
