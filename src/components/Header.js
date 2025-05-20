import React from 'react';
import '../styles/Header.css';

function Header({ goHome, goSubscription, goProfile, user }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo" style={{cursor: 'pointer'}} onClick={goHome}>Neurapix</div>
        <div className="header-actions">
          <button className="btn btn-upgrade" onClick={goSubscription}>Upgrade</button>
          <div className="user-profile" style={{cursor: 'pointer'}} onClick={goProfile}>
            <div className="user-avatar">U</div>
            <span>{user && user.name ? user.name : 'User Profile'}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 