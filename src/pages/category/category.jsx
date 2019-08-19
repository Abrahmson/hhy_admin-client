import React, { Component } from 'react'
import { Card, Table,  Button, Modal } from 'antd';

import LinkButton from '../../components/link-button/link-button'
import {reqCategorys} from '../../api'
import CategoryForm from './category-form';

/**
 * 分类管理
 */
export default class Category extends Component {
  state = {
    categorys:[],
    loading:false,
    showStatus:0, //0都不显示  1显示添加  2显示修改
  }

  //获取列表数据
  getCategorys = async ()=>{
    //发送请求前显示loading
    this.setState({
      loading: true
    })

    //发送请求
    const result = await reqCategorys()

    //请求完成后隐藏loading
    this.setState({
      loading:false
    })

    if (result.status === 0) {
      const categorys = result.data
      this.setState({
        categorys
      })
    }
  }

  //设置列数据
  inintColums = ()=>{
    this.columns = [
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

  //添加分类
  addCategory = ()=>{}

  //修改分类
  updateCategory = ()=>{}

  //隐藏对话框
  handleCancel = ()=>{
    this.setState({
      showStatus: 0
    })
  }

  componentWillMount(){
    this.inintColums()
  }
   componentDidMount(){
     this.getCategorys()
  }

  render() {
    const { categorys, showStatus } = this.state 
    
    const extra = (
      < Button
        type="primary"
        icon="plus" >
        添加
    </Button >

   )
    return (
      <span>
        <Card extra={extra} >
          <Table
            bordered
            loading={this.state.loading}
            columns={this.columns}
            dataSource={categorys}
            pagination={{
              defaultPageSize: 5,
              showQuickJumper: true
            }}
          />
        </Card>

        <Modal
          title="添加分类"
          visible={showStatus === 1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        >
          <CategoryForm/>
        </Modal >

        <Modal
          title="修改分类"
          visible={showStatus === 2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
          <CategoryForm/>
        </Modal >
      </span>
      
    )
  }
}
