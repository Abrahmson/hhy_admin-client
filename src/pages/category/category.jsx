import React, { Component } from 'react'
import { Card, Table,  Button} from 'antd';

import LinkButton from '../../components/link-button'

/**
 * 分类管理
 */
export default class Category extends Component {
  state = {
    categorys:[]
  }

  componentWillMount(){
    this.columns =[
        {
          title: '分类名称',
          dataIndex: 'name',
        },
        {
          width: 300,
          title: '操作',
          render: text => <LinkButton>修改分类</LinkButton>,
        }
      ]
    
    
  
     

  }
  componentDidMount(){
    
  }


  render() {
    const { categorys } = this.state 
    
    this.extra = (
      < Button
        type="primary"
        icon="plus" >
        添加
    </Button >

   )
    return (
      <Card extra={this.extra} >
        <Table
          bordered
          columns={this.columns}
          dataSource={categorys}
          pagination={{ defaultPageSize: 5, showQuickJumper: true }}
        />
      </Card>
    )
  }
}
