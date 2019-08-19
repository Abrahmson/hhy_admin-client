import React, { Component } from 'react'
import {Card, Input, Button, Select, Table} from 'antd';

const Option = Select.Option

// 商品管理主页
export default class  extends Component {
  render() {
    return (
      <div>
        Home
      </div>
      // <Card title={title} extra={extra}>
      //   <Table
      //     bordered
      //     loading
      //     colummns={this.colums}
      //     dataSource={products}
      //     pagination={{
      //       total,
      //       defaultPageSize: PAGE_SIZE,
      //       showQuickJumper: true,
      //       onChange: this.getProducts,
      //       current: this.pageNum
      //     }}
      //   />
      // </Card>
    )
  }
}
