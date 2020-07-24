import React from 'react';
import './App.css';
import {
  logo, logo2, zurich10, nosLevel1
} from './img'
import Proyectos from './proyectos/proyectos';

function App() {
  return (
    <div className="App">
      <Sticky/>
      <body>
        <Intro/>
        <Nosotros/>
        <Proyectos/>
      </body>
    </div>
  );
} 

class Sticky extends React.Component
{
  render()
  {
    return(
      <div className="sticky-menu">
        <img src={logo2} className="zuarq-logo" alt="logo" />
        <div className="sticky-item">Nosotros</div>
        <div className="sticky-item">Proyectos</div>
        <div className="sticky-item">Contacto</div>
      </div>
    )
  }
}

class Intro extends React.Component
{
  render()  {
    return(
      <div className="intro">
        <div className="intro-slogan">Soluciones en Espacios</div>
        <img className="intro-image" src={zurich10} alt="sample1"/>
      </div>
    )
  }
}

class Nosotros extends React.Component
{
  render()  {
    return(
      <div>
        <div className="nosTitle">NOSOTROS</div>
        <div className="nosLevel">
          <div className="nosKoppy">
          <b>zuArQ mx</b> es una empresa formada por socios estrategicos 
          especializados en arquitectura, diseño, ingeniería y mobiliario 
          que brinda soluciones integrales para oficinas.
          </div>
          <img className="lvl1img" src={nosLevel1} alt="nosLevel1"/>
        </div>
        <div className="nosLevel">
          <img className="lvl2img" src={logo} alt="nosLevel2-1"/>
          <img className="lvl2img" src={logo} alt="nosLevel2-2"/>
          <img className="lvl2img" src={logo} alt="nosLevel2-3"/>
        </div>
      </div>
    )
  }
}

export default App;
