import React, {Suspense, lazy} from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Loading from './components/loading';


const Tag = lazy(() => import('./pages/Tag'));
const Money = lazy(() => import('./pages/Money'));
const Statistics = lazy(() => import('./pages/Statistics'));
const NoMatch = lazy(() => import('./pages/NoMatch'));


function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/tag" component={Tag}/>
          <Route path="/money" component={Money}/>
          <Route path="/statistics" component={Statistics}/>
          <Route path="*" component={NoMatch}/>
          <Redirect exact from="/" to="money"/>
        </Switch>

      </Suspense>

    </div>

  );
}


export default App;
