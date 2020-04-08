import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import FlagGame from './containers/FlagGame/FlagGame';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Route path="/flag" exact component={FlagGame} />
          <Route path="/word" exact render={() => <h1>Word Game</h1>} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
