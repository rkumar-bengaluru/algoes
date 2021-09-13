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
import Java9Home from './java9';
import Lambda from './java8/lambda';
import Java8Stream from './java8/stream'
import ReactHome from './react';
import ReactUseStateHooks from './react/hooks';
import JavaScriptASynchAwait from './react/javascript/asynchawait'
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
        <Route exact path="/java8/lambda" component={Lambda} />
        <Route exact path="/java8/stream" component={Java8Stream} />
        <Route exact path="/java9/" component={Java9Home} />
        <Route exact path="/react/" component={ReactHome} />
        <Route exact path="/react/useState" component={ReactUseStateHooks} />
        <Route exact path="/react/asyncAwait" component={JavaScriptASynchAwait} />
        <Route exact path="/nodejs/" component={NodeJsHome} />
        <Route exact path="/aws/" component={AwsHome} />
        <Route exact path="/algorithm/:id" component={Algorithm} />
        <Route exact path="/search/" component={Search} />
      </Switch>
    </AppLayout>
  </HashRouter>
  , document.getElementById('root'));


