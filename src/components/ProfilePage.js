import React, { useState } from 'react';
import '../styles/ProfilePage.css';

function ProfilePage({ goHome, goSubscription, user, onLogout }) {
  const [profile, setProfile] = useState({
    name: user.name || '',
    displayName: '',
    email: user.name || '',
    phone: '',
    region: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
    }
  };

  return (
    <div className="profile-root">
      <header className="subscription-header">
        <div className="subscription-logo" style={{cursor: 'pointer'}} onClick={goHome}>NEURAPIX</div>
        <div className="subscription-profile">{profile.name || 'User Profile'}</div>
      </header>
      <main className="profile-main">
        <div className="profile-left">
          <h2>Profile</h2>
          <div className="profile-img-section">
            <div className="profile-img-circle">
              {profile.image ? (
                <img src={profile.image} alt="Profile" className="profile-img" />
              ) : (
                <span className="profile-img-placeholder">&#128100;</span>
              )}
            </div>
            <label className="profile-upload-label">
              Upload image
              <input type="file" accept="image/*" style={{display:'none'}} onChange={handleImage} />
            </label>
          </div>
          <div className="profile-fields">
            <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
            <input name="displayName" value={profile.displayName} onChange={handleChange} placeholder="Display Name" />
            <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone number" required />
            <input name="region" value={profile.region} onChange={handleChange} placeholder="Region" />
            <textarea name="description" value={profile.description} onChange={handleChange} placeholder="Type your description" />
          </div>
          <button className="profile-save-btn">Save</button>
          <div className="profile-logout" onClick={onLogout}>
            <span role="img" aria-label="logout">🔓</span> Log Out
          </div>
        </div>
        <div className="profile-right">
          <h2>Subscription</h2>
          <div className="profile-subscription-card">
            <div className="profile-subscription-title"><b>Basic Plan</b> | $0/mo with 100 monthly credits</div>
            <div className="profile-subscription-price">$0/month <span className="profile-credit">&#9679; 100</span></div>
            <div className="profile-subscription-desc">Reset to 100 credits next month</div>
            <button className="profile-upgrade-btn" onClick={goSubscription}>UPGRADE</button>
          </div>
          <h2>Transaction History</h2>
          <div className="profile-history-empty">No recent transactions.</div>
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

export default ProfilePage; 