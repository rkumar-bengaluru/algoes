import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout';
import App from './app';
import Algorithm from './algorithm';
import Search from './search';

// http://localhost:3000/algoes/#/regex/
// <Route exact path="/regex" component={RegEx} />
ReactDOM.render(
  <HashRouter>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/algorithm/:id" component={Algorithm} />
        <Route exact path="/search/" component={Search} />
      </Switch>
    </AppLayout>
  </HashRouter>
  , document.getElementById('root'));


