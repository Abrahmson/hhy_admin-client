import React, { Component } from 'react'
import {withRouter,Redirect} from 'react-router-dom';
import moment from "moment";
import {Modal} from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import menuList from '../../config/memuConfig'
import { reqWeather } from '../../api'
import LinkButton from '../link-button/link-button'
import { removeUser} from '../../utils/storageUtils';
import './index.less';

class Header extends Component {
  state = {
    currentTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    dayPictureUrl: '',
    weather:'',
    temperature:''
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        currentTime : moment().format('YYYY-MM-DD HH:mm:ss')
      })
    }, (1000));
  }
  componentWillMount(){
    this.getWeather();
  }

  getTitile = () => {
    let title = '';
    let path = this.props.location.pathname
    menuList.forEach((item) => {
      if (item.key === path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find(cItem => cItem.key === path)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }

  getWeather = async () => {
    // 发请求
    const { dayPictureUrl, weather, temperature } = await reqWeather('北京')
    console.log(dayPictureUrl, weather, temperature);
    // 更新状态
    this.setState({
      dayPictureUrl,
      weather,
      temperature
    })
  }

  handleClick = ()=>{
    Modal.confirm({
      title:'你确认退出吗？',
      onOk:()=>{
        //删除内存信息
        removeUser()
        //删除内存中的信息
        memoryUtils.user = {}
        //跳转到登入页面
        this.props.history.replace('/login')
      }
    })
    
  }

  render() {
    let {currentTime} = this.state
    const title = this.getTitile();
    const user = memoryUtils.user

    return (
      <div className="header">
      <div className="header-top">
          欢迎<span className="admin-name"> {user.username} </span>
          <LinkButton onClick={this.handleClick}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <h1>{title}</h1>
          </div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={this.state.dayPictureUrl}></img>
            <span>{this.state.weather}</span>
            <span>{this.state.temperature}</span>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Header)

