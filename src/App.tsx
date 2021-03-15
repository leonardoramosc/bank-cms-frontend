import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignInPageComponent from './components/pages/signin-page/signin-page.component';

import './app.css';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/sign-in">
          <SignInPageComponent />
        </Route>

        <Route path="/" >
          <Redirect to="sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
