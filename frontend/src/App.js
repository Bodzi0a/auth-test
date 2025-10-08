import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WelcomePage from './pages/WelcomePage';
import { getCurrentUser, getToken } from './services/authService';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
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
    setShowRegister(false);
  };

   const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

   const switchToLogin = () => {
    setShowRegister(false);
  };
  const switchToRegister = () => {
    setShowRegister(true);
  };

  

  return (
    <div className="App">
      {isLoggedIn ? (
        <WelcomePage onLogout={handleLogout} />
      ) : showRegister ? (
        <RegisterForm  
        onRegisterSuccess={handleRegisterSuccess}
        onSwitchToLogin={switchToLogin} 
        />
      ) : (
        <LoginForm 
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={switchToRegister}
        />
      )}
    </div>
  );
}

export default App;