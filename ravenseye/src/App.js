import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import FauxLogin from './pages/FauxLogin';
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  exact path="/">
   <FauxLogin />
   </Route>
   <Route  exact path="/SecondPage">
   <SecondPage />
   </Route>
   </Switch>
    </div>
  );
}

export default App;
