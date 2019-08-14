import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom'

import logo from "../../assets/images/logo.png"
import menuList from '../../config/memuConfig';
import './index.less'

const { SubMenu } = Menu;

// 左侧导航组件

 class LeftNav extends Component {

    // 定义函数动态生成导航栏：map+递归
    /*getMemuNodes = (menuList)=>{
        return menuList.map((item) => {
            if (item.children) {
                return(
                    <SubMenu
                        key={item.title}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            // 递归调用
                            this.getMemuNodes(item.children)
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.title}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }
    */

    // 定义函数动态生成导航栏：reduce+递归
    getMemuNodes = (menuList)=>{
        //得到请求的路由路径
        const path = this.props.location.pathname

        return menuList.reduce((pre,item)=>{
            if (item.children) {

                const citem = item.children.find(citem => citem.key === path)
                if (citem){
                    this.openKey = item.key
                    // console.log(citem.key);
                    // console.log(path);
                    // console.log(this.openKey);
                }

                pre.push(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            // 递归调用
                            this.getMemuNodes(item.children)
                        }
                    </SubMenu>
                )
            }else{
                pre.push(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        
            return pre
        },[])
    }
    
    componentWillMount(){
        this.memuNodes = this.getMemuNodes(menuList)
    }

    render() {
        //得到请求的路由路径
        const path = this.props.location.pathname
        // console.log(this.openKey);
        return (
            <div className='left-nav'>
                <Link to='/home' className='left-nav-header'> {/* 侧边栏头部 */}
                    <img src={logo} alt="logo" />
                    <h1>硅谷管理</h1>
                </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    // defaultSelectedKeys={["/home"]}
                    defaultOpenKeys={[this.openKey]}
                >
                    {
                        // 调用函数动态生成导航栏
                        this.memuNodes 
                    }
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)
