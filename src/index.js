import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Page1 from 'pages/Page1/Page1';
import { MuiTheme } from 'assets/theme';
import { createTheme, MuiThemeProvider, } from '@material-ui/core';

const theme = createTheme(MuiTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={'/page1'} component={Page1}/>
        <Redirect to={'/page1'}/>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
