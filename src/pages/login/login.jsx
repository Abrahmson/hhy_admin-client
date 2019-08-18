import React, { Component } from 'react';
import { Form, Icon, Input, Button ,message} from 'antd';
import { Redirect } from 'react-router-dom'

import './login.less';
import logo from '../../assets/images/logo.png';
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import {saveUser} from '../../utils/storageUtils'


class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        // const username = this.props.form.getFieldValue('username')
        // const password = this.props.form.getFieldValue('password')
        // console.log(username, password)
        this.props.form.validateFields(async(err, values) => {
            if (!err) {
                //获取数据发送请求
                // console.log('Received values of form: ', values);
                const { username, password } = values
                const result = await reqLogin(username, password)
                console.log(result)
                if (result.status === 0){

                    //获取user数据===》对象
                    const user = result.data

                    //保存user在local中，下次登入可以先读local中的数据
                    saveUser(user)

                    memoryUtils.user = user
                    
                    this.props.history.replace('/')
                    message.success('登入成功')
                } else {
                    message.error(result.msg)
                }
            }
        })
    }
        render() {

            //如果用户已经登入了，则自动跳转到admin
            const user = memoryUtils.user
            if (user._id) {
                return <Redirect to='/' /> // 自动跳转到指定的路由路径
            }

            const { getFieldDecorator } = this.props.form
            return (
                <div className="login">
                    <div className="login-header">
                        <img src={logo} alt="login" />
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
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true, whitespace: true, message: '必须输入用户名' },
                                        { min: 4, message: '必须大于等于4位' },
                                        { max: 12, message: '必须小于等于12位' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、数字或下划线组成' }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { required: true, whitespace: true, message: '必须输入密码' },
                                        { min: 4, message: '必须大于等于4位' },
                                        { max: 12, message: '必须小于等于12位' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、数字或下划线组成' }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
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