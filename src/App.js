import React, { Component } from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from "react-router-dom"

import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

// import logo from './logo.svg';
import './App.css';
// import { from } from 'rxjs';

export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
     </BrowserRouter>
    )
  }
}

