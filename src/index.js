import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppLayout from './layout';
import App from './app';
import Algorithm from './algorithm';
import Search from './search';
import Algo from './algo';
import DesignPatternHome from './dp';
import singleton from './dp/singleton';
// java 16
import Java16Home from './java/java16';
import Java16VectorApi from './java/java16/j16vectorapi';
import Java16LinkerApi from './java/java16/j16linkerapi';
import Java16ForeignMemoryApi from './java/java16/j16memoryapi';
import Java16SealedInterface from './java/java16/j16sealed';
import Java16RecordClass from './java/java16/j16record';
import J16ValueBased from './java/java16/j16valuebased';
import J16PatternMatch from './java/java16/j16patternmatch';
// java 15
import Java15Home from './java/java15';
import Java15HiddenClass from './java/java15/j15hidden';
import Java15TextBlock from "./java/java15/j15textblock";
import J15EDSA from "./java/java15/j15eddsa";
// java 14
import Java14Home from './java/java14';
import Java14RecordClass from './java/java14/j14record';
import J14NullPointer from "./java/java14/j14nullpointer";
import J14SwitchExp from "./java/java14/j14switchexp";
// java 11
import Java11Home from './java/java11';
import J11ChaCha20 from "./java/java11/j11chacha20";
import J11HttpClient from "./java/java11/j11httpclient";
import J11KeyGen from "./java/java11/j11keygen";
import J11Lauch from "./java/java11/j11launch";
import J11LocalVar from "./java/java11/j11localvar";
import J11Nac from "./java/java11/j11nac";
import J11TLS from "./java/java11/j11tls";
import J11Unicode from "./java/java11/j11unicode";
// java 9
import Java9Home from './java/java9';
import J9Anonymous from "./java/java9/j9anonymous";
import J9Factory from "./java/java9/j9factory";
import J9PrivateInterface from "./java/java9/j9privateinterface";
import J9Process from "./java/java9/j9process";
import J9SafeVar from "./java/java9/j9safevar";
import J9Stream from "./java/java9/j9stream";
import J9TryResource from "./java/java9/j9tryresource";
// java 8
import Java8Home from './java/java8';
import J8Lambda from './java/java8/j8lambda';
import Java8Stream from './java/java8/j8stream'
import J8Functional from "./java/java8/j8functional";
import J8MethodRef from "./java/java8/j8methodref";
import J8Optional from "./java/java8/j8optional";
//
// spring
import SpringHome from './spring';
import SpringController from './spring/controller';
import WebFlux from './spring/webflux';
import Hateaos from './spring/hateaos';

//
import ReactHome from './react';
import ReactUseStateHooks from './react/hooks';
import JavaScriptASynchAwait from './react/javascript/asynchawait'
import NodeJsHome from './nodejs';
import AwsHome from './aws';
// lazy loading
const SpringScheduling = lazy(() => import('./spring/scheduling'));
const WebSocket = lazy(() => import('./spring/websocket/index'));
const ReactUseContext = lazy(() => import('./react/usecontext'));
const SpringRouter = lazy(() => import('./spring/router'));
const ReactErrorBoundary = lazy(() => import('./react/errorboundary'));
const RefForwarding = lazy(() => import('./react/ref/chatroom'));
const ReactHoc = lazy(() => import('./react/hoc/hocdemo'));
const Express = lazy(() => import('./nodejs/express/express'));
const WordCountDemo = lazy(() => import('./react/component/wordcountdemo'));
const AxiosFramework = lazy(() => import('./nodejs/axios/axios'));
const ReactTesting = lazy(() => import('./test/index'));
const ReactUseEffect = lazy(() => import('./react/useEffect'));
const ReactUseReducer = lazy(() => import('./react/usereducer'));
const ReactUseMemo = lazy(() => import('./react/useMemo'));
const ReactTikTok = lazy(() => import('./react/tictok/game'));
const ReactRedux = lazy(() => import('./react/redux/index'));
const Solid = lazy(() => import('./dp/solid'));

// http://localhost:3000/algoes/#/regex/
// <Route exact path="/regex" component={RegEx} />
ReactDOM.render(
  <HashRouter>
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/algorithm/" component={Algo} />
          <Route exact path="/designpatterns/" component={DesignPatternHome} />
          <Route exact path="/designpatterns/singleton" component={singleton} />
          <Route exact path="/designpatterns/solid" component={Solid} />
          {/* {java 16} */}
          <Route exact path="/java16/" component={Java16Home} />
          <Route exact path="/java16/vectorapi" component={Java16VectorApi} />
          <Route exact path="/java16/linkerapi" component={Java16LinkerApi} />
          <Route exact path="/java16/memoryapi" component={Java16ForeignMemoryApi} />
          <Route exact path="/java16/sealed" component={Java16SealedInterface} />
          <Route exact path="/java16/record" component={Java16RecordClass} />
          <Route exact path="/java16/valuebased" component={J16ValueBased} />
          <Route exact path="/java16/patternmatch" component={J16PatternMatch} />
          {/* {java 15} */}
          <Route exact path="/java15/" component={Java15Home} />
          <Route exact path="/java15/textblock" component={Java15TextBlock} />
          <Route exact path="/java15/hidden" component={Java15HiddenClass} />
          <Route exact path="/java15/eddsa" component={J15EDSA} />
          {/* {java 14} */}
          <Route exact path="/java14/" component={Java14Home} />
          <Route exact path="/java14/record" component={Java14RecordClass} />
          <Route exact path="/java14/nullpointer" component={J14NullPointer} />
          <Route exact path="/java14/switchexp" component={J14SwitchExp} />
          {/* {java 11} */}
          <Route exact path="/java11/" component={Java11Home} />
          <Route exact path="/java11/chacha20" component={J11ChaCha20} />
          <Route exact path="/java11/httpclient" component={J11HttpClient} />
          <Route exact path="/java11/keygen" component={J11KeyGen} />
          <Route exact path="/java11/launch" component={J11Lauch} />
          <Route exact path="/java11/localvar" component={J11LocalVar} />
          <Route exact path="/java11/nac" component={J11Nac} />
          <Route exact path="/java11/tls" component={J11TLS} />
          <Route exact path="/java11/unicode" component={J11Unicode} />
          {/* {java 9} */}
          <Route exact path="/java9/" component={Java9Home} />
          <Route exact path="/java9/anonymous" component={J9Anonymous} />
          <Route exact path="/java9/factory" component={J9Factory} />
          <Route exact path="/java9/private" component={J9PrivateInterface} />
          <Route exact path="/java9/process" component={J9Process} />
          <Route exact path="/java9/safe" component={J9SafeVar} />
          <Route exact path="/java9/stream" component={J9Stream} />
          <Route exact path="/java9/tryresource" component={J9TryResource} />
          {/* {java 8} */}
          <Route exact path="/java8/" component={Java8Home} />
          <Route exact path="/java8/lambda" component={J8Lambda} />
          <Route exact path="/java8/stream" component={Java8Stream} />
          <Route exact path="/java8/functional" component={J8Functional} />
          <Route exact path="/java8/methodref" component={J8MethodRef} />
          <Route exact path="/java8/optional" component={J8Optional} />
          <Route exact path="/java8/default" component={J9PrivateInterface} />
          <Route exact path="/java8/base64" component={Java15HiddenClass} />
          {/* {java ends} */}
          {/* {spring.io starts} */}
          <Route exact path="/spring/" component={SpringHome} />
          <Route exact path="/spring/controller" component={SpringController} />
          <Route exact path="/spring/webflux" component={WebFlux} />
          <Route exact path="/spring/hateaos" component={Hateaos} />
          <Route exact path="/spring/scheduling" component={SpringScheduling} />
          <Route exact path="/spring/websocket" component={WebSocket} />
          <Route exact path="/spring/router" component={SpringRouter} />
          {/* {spring.io ends} */}
          <Route exact path="/react/" component={ReactHome} />
          <Route exact path="/react/useState" component={ReactUseStateHooks} />
          <Route exact path="/react/asyncAwait" component={JavaScriptASynchAwait} />
          <Route exact path="/react/usecontext" component={ReactUseContext} />
          <Route exact path="/react/errorboundary" component={ReactErrorBoundary} />
          <Route exact path="/react/refforwarding" component={RefForwarding} />
          <Route exact path="/react/hoc" component={ReactHoc} />
          <Route exact path="/react/webcomponent" component={WordCountDemo} />
          <Route exact path="/react/testing" component={ReactTesting} />
          <Route exact path="/react/useeffect" component={ReactUseEffect} />
          <Route exact path="/react/usereducer" component={ReactUseReducer} />
          <Route exact path="/react/usememo" component={ReactUseMemo} />
          <Route exact path="/react/tiktok" component={ReactTikTok} />
          <Route exact path="/react/redux" component={ReactRedux} />
          {/* {react ends} */}
          <Route exact path="/nodejs/" component={NodeJsHome} />
          <Route exact path="/nodejs/express" component={Express} />
          <Route exact path="/nodejs/axios" component={AxiosFramework} />
          {/* {kuubernetes} */}
          <Route exact path="/aws/" component={AwsHome} />
          <Route exact path="/algorithm/:id" component={Algorithm} />
          <Route exact path="/search/" component={Search} />
        </Switch>
      </Suspense>
    </AppLayout>
  </HashRouter>
  , document.getElementById('root'));


