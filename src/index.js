import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './layout';
import App from './app';
import Algorithm from './algorithm';
import Search from './search';
import Algo from './algo';
import DesignPatternHome from './dp';
import singleton from './dp/singleton'
import Java8Home from './java8';
import ReactHome from './react';
import NodeJsHome from './nodejs';
import AwsHome from './aws';

// http://localhost:3000/algoes/#/regex/
// <Route exact path="/regex" component={RegEx} />
ReactDOM.render(
  <HashRouter>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/algorithm/" component={Algo} />
        <Route exact path="/designpatterns/" component={DesignPatternHome} />
        <Route exact path="/designpatterns/singleton" component={singleton} />
        <Route exact path="/java8/" component={Java8Home} />
        <Route exact path="/react/" component={ReactHome} />
        <Route exact path="/nodejs/" component={NodeJsHome} />
        <Route exact path="/aws/" component={AwsHome} />
        <Route exact path="/algorithm/:id" component={Algorithm} />
        <Route exact path="/search/" component={Search} />
      </Switch>
    </AppLayout>
  </HashRouter>
  , document.getElementById('root'));


