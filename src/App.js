import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom';

//Componentes
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar';

//Pages
import Agregar from './Pages/agregar';
//import Home from './pages/home';

// Semantic UI
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <div>
            <Navbar />
          </div>
        </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          LA TIENDA DE MARIANA
        </a>
      </header>
    </div>
  );
}

export default App;

