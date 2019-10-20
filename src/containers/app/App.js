import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from '../../logo.svg';
import './App.css';
import MainView from '../main';
import DetailsView from '../detail';
import ChartView from '../chart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <MainView/>
            </Route>
            <Route path="/detail/:id">
              <DetailsView />
            </Route>
            <Route path="/chart">
              <ChartView />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
