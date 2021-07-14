import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout';
import App from './app';

ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
  , document.getElementById('root'));


