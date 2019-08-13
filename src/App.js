import React, { Component } from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from "react-router-dom"

import Login from "./pages/login/login"
import Admin from "./pages/login/Admin"

import logo from './logo.svg';
import './App.css';
import { from } from 'rxjs';

export default class App extends Component {
  render() {
    return (
     <HashRouter>
       <Switch>
         <Route path="/login" Component={Login}></Route>
         <Route path="/admin" Component={Admin}></Route>
       </Switch>
     </HashRouter>
    )
  }
}

