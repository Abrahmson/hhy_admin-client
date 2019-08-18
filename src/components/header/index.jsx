import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import moment from "moment";

import memoryUtils from '../../utils/memoryUtils'
import menuList from '../../config/memuConfig'
import { reqWeather } from '../../api'
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


  render() {
    let {currentTime} = this.state
    const title = this.getTitile();
    const user = memoryUtils.user

    return (
      <div className="header">
      <div className="header-top">
          欢迎<span className="admin-name"> {user.username} </span>
          <a>退出</a>
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

