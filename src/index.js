import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout';
import App from './app';
import Algorithm from './algorithm';

ReactDOM.render(
  <HashRouter>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/algorithm/:id" component={Algorithm} />
      </Switch>
    </AppLayout>
  </HashRouter>
  , document.getElementById('root'));


