import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';

import logo from "../../assets/images/logo.png"
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {
    render() {
        return (
            <div className='left-nav'>
                <div className='left-nav-header'> {/* 侧边栏头部 */}
                    <img src={logo} alt="logo"/>
                    <h1>硅谷管理</h1>
                </div>

                <div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>商品</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">品类管理</Menu.Item>
                            <Menu.Item key="6">商品管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
