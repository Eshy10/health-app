import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import SignUpForm from './components/signupForm/SignUpForm';
import Homepage from './containers/homepage/Homepage';
import AddMeasureCard from './components/addMeasures/AddMeasurement';
import TrackCard from './components/track/TrackCard';
import MeasureDetails from './components/measureDetails/MeasureDetails';
import PieChatPage from './components/progress/Progress';
import './App.css';

function App() {
  const currentUser = localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/homepage" component={Homepage}>
            {currentUser ? <Homepage /> : <LoginForm />}
          </Route>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
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
          <Route path="/trackCard" component={TrackCard}>
            {currentUser ? <TrackCard /> : <LoginForm />}
          </Route>
          <Route path="/progress" component={PieChatPage}>
            {currentUser ? <PieChatPage /> : <LoginForm />}
          </Route>
          <Route path="/"><LoginForm /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
