import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './notre-histoire';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank"
            rel="noopener noreferrer">Learn React</a>
            <BrowserRouter>
              <div>
                <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>

        </header>
      </div>
    );
  }
}

export default App;
