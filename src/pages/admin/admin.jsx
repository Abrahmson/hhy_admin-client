import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height:"100%"}} >
                <Sider>Sider</Sider>
                <Layout>
                    <Header style={{ backgroundColor:'white'}} >Header</Header>
                    <Content style={{ backgroundColor:'white', margin:40}} >Content</Content>
                    <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>  
        )
    }
}
