import React, { Component } from 'react'
import { gray } from 'ansi-colors';

export default class Home extends Component {
    render() {
        return (
            <div style={{
                width: '100%' ,
                height: '100%',
                display: 'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <h2 style={{ 
                    fontSize: 35, 
                    color: {gray} ,
                }}>欢迎使用硅谷后台管理系统</h2>
            </div>
        )
    }
}
