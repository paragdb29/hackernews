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
            <Route exact path="/" component={MainView}/>
            <Route path="/detail/:id" component={DetailsView}/>
            <Route path="/chart" component={ChartView}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
