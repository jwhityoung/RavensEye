import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import FauxLogin from './pages/FauxLogin';
import Info from './pages/Info'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  exact path="/">
   <FauxLogin />
   </Route>
   <Route  exact path="/info">
   <Info />
   </Route>
   </Switch>
    </div>
  );
}

export default App;
