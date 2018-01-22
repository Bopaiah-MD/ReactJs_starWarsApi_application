import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Login from './Login'
import SearchComponent from "./components/SearchComponent"
import NotFoundPage from "./components/NotFoundPage"

const App = () => {
  return (
    <div className="App">
      <h1 className="welcome-header">Welcome to Star Wars </h1>
      <Login />
    </div>
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}> </Route>
        <Route path="/search" component={SearchComponent}> </Route>
        <Route component={NotFoundPage}> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
