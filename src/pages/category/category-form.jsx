import React, { Component } from 'react'
import {Form} from 'antd';
import Proptypes from 'prop-types';

const { Item } = Form.Item

//分类添加或修改的组件
class CategoryForm extends Component {

  static proptypes = {
    categoryName: Proptypes.string
  }
  render() {
    const { getFieldDecorator} = this.props.form
    return (
      <Form>
        <Item>{
          getFieldDecorator('categoryName', {
            initialValue: '',
            rules: [
              { required: true, message: '分类名称是必须的' }
            ]
          })(
            <input type="text" placeholder='请输入分类'/>
          )}
        </Item>
      </Form>
    )
  }
}

export default Form.create(CategoryForm)