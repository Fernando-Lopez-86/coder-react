import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from "./components/Button";
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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementaContador = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementaContador = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="contador">
            <h3>Contador:</h3>
            <h1>{count}</h1>
          </div>
          <div class="boton">
            <Button title={"-"} action={this.decrementaContador} />
            <Button title={"+"} action={this.incrementaContador} />
          </div>
        </div>
      </div>
    );
  }
}