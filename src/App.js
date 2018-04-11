import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './navbar/MainNavbar';
import MainPage from './main/MainPage';
import MainFooter from './navbar/MainFooter';
import EventPage from './event/EventPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavbar/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/event/:title" component={EventPage}/>
          <MainFooter/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
