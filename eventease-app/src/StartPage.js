import React, { useState } from 'react';

const StartPage = ({ onLoginClick }) => {
  const [loggedIn, setLoggedIn] = useState(false);


  if (loggedIn) {
    return (
      <div className="container-fluid text-center">
        <h1>Pagina de bienvenida</h1>
        {/*  */}
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">

          <div className="container-fluid" style={{ textAlign: 'left', marginTop: '10px' }}>
            <a href="index.html">
              <img src="img/eventease.png" alt="eventease" style={{ width: '50px', height: 'auto' }} />
            </a>
          </div>
          
          <div >
            <h2 style={{ textAlign: 'center', fontSize : '65px', fontFamily: 'serif', }}>Tus eventos de una forma más accesible</h2>
          </div>

          <div className="container-fluid" style={{ textAlign: 'left', marginTop: '10px' }}>
            <a href="index.html">
              <img src="img/ps.png" alt="ps" style={{ width: '50px', height: 'auto',position:"absolute", top:"100%" }} />
            </a>
          </div>
          
        </div>
        <div className="col-md-6 p-0">

          <div class="omg" style={{width: "em", position: "relative", 
                                  backgroundImage: `url(img/evento.jpeg)`,
                                  backgroundRepeat: "no-repeat",
                                  imageResolution: "from-image",
                                  height: "100%",
                                  width: "100%",
                                  alignContent: "center",
                                  }}>
                                  
            <div class= "buttons">
              <button onClick={onLoginClick} style={{margin:"100px",
                                                      position: "absolute",
                                                      top: "0%",
                                                      msTransform: `translateY(-50%)`,
                                                      transform: `translateY(-50%)`}} >
                  Iniciar Sesión 
              </button>
              <button onClick={onLoginClick} style={{margin:"100px",
                                                      position: "absolute",
                                                      top: "50%",
                                                      msTransform: `translateY(-50%)`,
                                                      transform: `translateY(-50%)`}}>
                  Eventos
              </button>
              <button onClick={onLoginClick} style={{margin:"100px",
                                                      position: "absolute",
                                                      top: "100%",
                                                      msTransform: `translateY(-50%)`,
                                                      transform: `translateY(-50%)`}}>
                  Reservar
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1>Pagina de inicio</h1>
      <p> Le toca a David.</p>
      <button onClick={onLoginClick}>Iniciar sesión</button>
    </div>
  );
};

export default StartPage;
