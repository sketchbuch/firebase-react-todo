import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { LoginPage } from '../../pages/Login';
import { SignupPage } from '../../pages/Signup';

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}