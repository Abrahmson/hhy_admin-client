import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './login.less'
import logo from './images/logo.png'


 class Login extends Component {  
    handleSubmit = e => {
        e.preventDefault(); //阻止事件的默认行为
        this.props.form.validateFields((err, values) => {
          if (!err) {
            alert('校验成功发送请求')
          }
        })
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="login"/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h3>用户登陆</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {/* 用户名/密码的的合法性要求
                                1). 必须输入
                                2). 必须大于等于4位
                                3). 必须小于等于12位
                                4). 必须是英文、数字或下划线组成 */}
                            {getFieldDecorator('username', {//配置对象
                                rules: [
                                    { required: true, whitespace:true, message: '必须输入用户名' },
                                    { min:4, message:'必须大于等于4位'},
                                    { max:12, message:'必须小于等于12位'},
                                    { pattern:/^[a-zA-Z0-9_]+$/, message:'必须是英文、数字或下划线组成'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, whitespace:true, message: '必须输入密码' },
                                    { min:4, message:'必须大于等于4位'},
                                    { max:12, message:'必须小于等于12位'},
                                    { pattern:/^[a-zA-Z0-9_]+$/, message:'必须是英文、数字或下划线组成'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登  陆
                            </Button>
                        </Form.Item>
                    </Form>
                 </div>
            </div> 
        )
    }   
}
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm