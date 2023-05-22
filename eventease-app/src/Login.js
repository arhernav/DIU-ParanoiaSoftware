import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.diu-server.net/v1/login', {
        username,
        password,
        id: 3,
      });
      const { token } = response.data;
      setLoggedIn(true);
      setError('');
      onLogin(token);
      console.log('Token:', token);
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login failed:', error);
    }
  };

  if (loggedIn) {
    return (
      <div className="container-fluid text-center">
        <h1>Pagina de bienvenida</h1>
        {/*  */}
      </div>
    );
  }

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-6">
          <div className="container-fluid" style={{ textAlign: 'left', marginTop: '10px' }}>
            <a href="index.html">
              <img src="img/eventease.png" alt="eventease" style={{ width: '50px', height: 'auto' }} />
            </a>
          </div>
          <br />
          <h1 style={{ textAlign: 'center' }}>Inicio de sesión</h1>
          <form style={{ padding: '40px' }} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" />
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Correo electrónico"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" />
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <p style={{ textAlign: 'right' }}>¿Olvidaste tu contraseña?</p>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: '#90E0F3' }}>
              Iniciar sesión
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
        <div className="col-md-6 p-0">
          <img src="img/evento.jpeg" className="img-fluid" style={{ width: '200%', height: 'auto' }} alt="Event" />
        </div>
      </div>
    </div>
  );
};

export default Login;
