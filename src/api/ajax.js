// 用来发ajax请求的函数
// 封装函数的理由，axios在发送post请求时传参为对象时会转换为json对象，但是服务器不一定可以接受json格式的，但是URLencoded格式时没有问题的
// 所以在发送请求前要用到请求拦截

//1.post请求参数可以是接送格式，也可能是urlencoded格式
//2.请求成功得到的数据不是response，而是data
import {
  message
} from 'antd'

const axios = require('axios');
const qs = require('qs')

//请求拦截器
axios.interceptors.request.use(config => {
    if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
      config.data = qs.stringify(config.data) //将Json对象格式转换为urlencoded格式
    }
    return config
  })

  //响应拦截器
axios.interceptors.response.use(response => {
      return response.data
    },error=>{
      message.error('请求出错'+error.message)
    }
  )

  export default axios
  
