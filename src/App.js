import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import SignUpForm from './components/signupForm/SignUpForm';
import Homepage from './containers/homepage/Homepage';
import AddMeasureCard from './components/addMeasures/AddMeasurement';
import TrackCard from './components/track/TrackCard';
import MeasureDetails from './components/measureDetails/MeasureDetails';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/signup" component={SignUpForm}/>
    <Route path="/login" component={LoginForm}/>
    <Route exact path="/" component={Homepage}/>
    <Route
    path="/measurecard/:measurecardIndex"
    exact
    component={AddMeasureCard}
    />
    <Route
    path="/measuredetails/:measuredetailsIndex"
    exact
    component={MeasureDetails}
    />
    <Route path="/trackCard" component={TrackCard}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
