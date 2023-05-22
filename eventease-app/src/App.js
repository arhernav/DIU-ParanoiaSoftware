import React, { useState } from 'react';
import Login from './Login';
import Events from './Events';
import StartPage from './StartPage';
import UserHomePage from './UserHomePage';

const App = () => {
  const [token, setToken] = useState('');
  const [menuOption, setMenuOption] = useState('');
  const [currentPage, setCurrentPage] = useState('start');

  const handleLogin = (newToken) => {
    setToken(newToken);
    setCurrentPage('userHome');
  };

  const handleMenuOption = (option) => {
    setMenuOption(option);
  };

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  return (
    <div>
      {currentPage === 'start' && (
        <StartPage onLoginClick={handleLoginClick} />
      )}
      {currentPage === 'login' && (
        <Login onLogin={handleLogin} />
      )}
      {currentPage === 'userHome' && menuOption !== 'events' && (
        <UserHomePage handleMenuOption={handleMenuOption} />
      )}
      {currentPage === 'userHome' && menuOption === 'events' && (
        <Events token={token} />
      )}
    </div>
  );
};

export default App;
