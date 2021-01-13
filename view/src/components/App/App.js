import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { LoginPage } from '../../pages/Login';
import { SignupPage } from '../../pages/Signup';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#FF5722',
      dark: '#d50000',
      contrastText: '#fff'
    }
  }
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}