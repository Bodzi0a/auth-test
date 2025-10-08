import React, { useEffect } from 'react';
import { logout, getCurrentUser, isTokenExpired } from '../services/authService';

function WelcomePage({ onLogout }) {
  const user = getCurrentUser();

  useEffect(() => {
    // Check token expiry every minute
    const interval = setInterval(() => {
      if (isTokenExpired()) {
        alert('Session expired. Please login again.');
        handleLogout();
      }
    }, 60000); // Check every 60 seconds

    // Check immediately on mount
    if (isTokenExpired()) {
      alert('Session expired. Please login again.');
      handleLogout();
    }

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Hello, {user?.email}!</h1>
        <p>Welcome to your dashboard</p>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
