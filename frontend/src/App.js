import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import WelcomePage from './pages/WelcomePage';
import { getCurrentUser, getToken } from './services/authService';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = getToken();
    const user = getCurrentUser();
    
    if (token && user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <WelcomePage onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;