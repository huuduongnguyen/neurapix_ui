import React, { useState } from 'react';
import '../styles/SignInPage.css';

function SignUpPage({ onSignUp, onLogin, goHome }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Simulate sign up success
    onSignUp({ name, email });
  };

  return (
    <div className="signin-root">
      <header className="signin-header">
        <div className="signin-logo" style={{cursor: 'pointer'}} onClick={goHome}>NEURAPIX</div>
      </header>
      <main className="signin-main">
        <div className="signin-left">
          <div className="signin-welcome">WELCOME TO</div>
          <div className="signin-brand">NEURAPIX</div>
          <div className="signin-desc">
            NEURAPIX is an <b>AI-powered</b> photo editing platform that enhances images instantly. With advanced algorithms, it great details, colors, removes spots, sharpens, and restores old photos effortlessly. Perfect for both professionals and casual users—<b>no Photoshop skills needed!</b>
          </div>
          <div className="signin-copyright">© 2025 NEURAPIX. All rights reserved.</div>
        </div>
        <div className="signin-right">
          <button className="google-btn" type="button">
            <span className="google-icon">G</span> Sign up with Google
          </button>
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2>Create Your Account</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            <div className="password-field">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Enter Password Again"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirm((v) => !v)}
                title={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? '🙈' : '👁️'}
              </span>
            </div>
            <div className="signin-terms">
              By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </div>
            {error && <div style={{color: 'red', fontSize: '0.95em'}}>{error}</div>}
            <button className="signin-btn" type="submit">Sign In</button>
            <div className="signin-register">
              Already a member? <a href="#" onClick={e => {e.preventDefault(); onLogin();}}>Login here</a>
            </div>
          </form>
        </div>
      </main>
      <footer className="signin-footer">
        <div className="footer-content">
          <div className="footer-col logo-col">
            <div className="footer-logo">NEURAPIX</div>
            <div className="footer-newsletter">
              <div>Subscribe to our newsletter for the latest updates on features and releases.</div>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email here" />
                <button type="submit">Join</button>
              </form>
              <div className="footer-disclaimer">By subscribing, you consent to our Privacy Policy and receive updates.</div>
            </div>
            <div className="footer-copyright">© 2025 NEURAPIX. All rights reserved.</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Quick Links</div>
            <ul>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">Resources</div>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">E-books</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">Connect With Us</div>
            <ul className="footer-social">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a> <span>|</span> <a href="#">Terms of Service</a> <span>|</span> <a href="#">Cookie Settings</a>
        </div>
      </footer>
    </div>
  );
}

export default SignUpPage; 