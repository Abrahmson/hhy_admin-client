import React, { Component } from 'react'

import './login.less'
import logo from './images/logo.png'


export default class Login extends Component {
    render() {
        return (
            <div className="login">
                 <div className="login-header">
                     <img src={logo} alt="login"/>
                     <h1>后台管理系统</h1>
                 </div>
                 <div className="login-content">
                     <h3>用户登陆</h3>
                     <div>用户登入输入框</div>
                 </div>
            </div>
        )
    }
}
