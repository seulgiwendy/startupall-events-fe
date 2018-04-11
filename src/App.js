import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './navbar/MainNavbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavbar/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
