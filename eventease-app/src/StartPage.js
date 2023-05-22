import React from 'react';

const StartPage = ({ onLoginClick }) => {
  return (
    <div>
      <h1>Pagina de inicio</h1>
      <p> Le toca a David.</p>
      <button onClick={onLoginClick}>Iniciar sesión</button>
    </div>
  );
};

export default StartPage;
