import React, { Component } from 'react'
import {logo} from "./imgs/logo.png"

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                 <div className="login-header">
                     <img src={logo} alt="login"/>
                     <h1>后台管理系统</h1>
                 </div>
                 <div className="login-content"></div>
            </div>
        )
    }
}
