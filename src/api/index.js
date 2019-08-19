/* 
包含应用中所有请求接口的函数: 接口请求函数
函数的返回值都是promise对象
*/

import jsonp from 'jsonp' // axios不能发jsonp请求
import ajax from './ajax'
import {
  message
} from 'antd';
import { resolve } from 'path';

//1. 登陆
/*### 请求URL：
	http://localhost:5000/login

### 请求方式：
	POST

### 参数类型
	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码
username=admin&password=admin
### 返回示例：
	成功:
      {
        "status": 0,
        "data": {
          "_id": "5c3b297dea95883f340178b0",
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "username": "admin",
          "create_time": 1547381117891,
          "__v": 0,
          "role": {
            "menus": []
          }
        }
      }
	失败
	  {
        "status": 1,
        "msg": "用户名或密码不正确!"
      } */
export const reqLogin = (username,password) => {
  return ajax.post('/login', {
      username,
      password
    })
}

//6. 获取分类列表
/*### 请求URL：
	http://localhost:5000/manage/category/list

### 请求方式：
	GET

### 参数类型: 
	无

### 返回示例：
      {
        "status": 0,
        "data": [
          {
            "_id": "5c2ed631f352726338607046",
            "name": "分类001"
          },
          {
            "_id": "5c2ed647f352726338607047",
            "name": "分类2"
          },
          {
            "_id": "5c2ed64cf352726338607048",
            "name": "1分类3"
          }
        ]
      } 
      */

export const reqCategorys = ()=>ajax.get('/manage/category/list')


//21. 获取天气信息(支持jsonp)
/*
### 请求URL：
http: //api.map.baidu.com/telematics/v3/weather

  ###请求方式：
GET

### 参数类型:
  |
  参数 | 是否必选 | 类型 | 说明 |
  location | Y | string | 城市名称 |
  output | Y | string | 返回数据格式: json |
  ak | Y | string | 唯一的应用key(3 p49MVra6urFRGOT9s8UBWr2)

### 返回示例： {
  "error": 0,
  "status": "success",
  "date": "2019-06-02",
  "results": [{
    "currentCity": "北京",
    "pm25": "119",
    "index": [{
        "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。",
        "tipt": "穿衣指数",
        "title": "穿衣",
        "zs": "舒适"
      },
      {
        "des": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。",
        "tipt": "洗车指数",
        "title": "洗车",
        "zs": "不宜"
      },
      {
        "des": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。",
        "tipt": "感冒指数",
        "title": "感冒",
        "zs": "少发"
      },
      {
        "des": "天气较好，赶快投身大自然参与户外运动，尽情感受运动的快乐吧。",
        "tipt": "运动指数",
        "title": "运动",
        "zs": "适宜"
      },
      {
        "des": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。",
        "tipt": "紫外线强度指数",
        "title": "紫外线强度",
        "zs": "弱"
      }
    ],
    "weather_data": [{
        "date": "周日 06月02日 (实时：30℃)",
        "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
        "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
        "weather": "多云转雷阵雨",
        "wind": "西南风3-4级",
        "temperature": "31 ~ 20℃"
      },
      {
        "date": "周一",
        "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
        "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
        "weather": "多云",
        "wind": "南风微风",
        "temperature": "34 ~ 20℃"
      },
      {
        "date": "周二",
        "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
        "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
        "weather": "雷阵雨",
        "wind": "东风微风",
        "temperature": "28 ~ 21℃"
      },
      {
        "date": "周三",
        "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
        "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
        "weather": "多云",
        "wind": "北风3-4级",
        "temperature": "33 ~ 19℃"
      }
    ]
  }]
}
 */
export const reqWeather = (city) => {
  const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
  return new Promise((resolve,reject)=>{
    jsonp(url, {}, (error, data) => {
      if (!error && data.error === 0) {
        const {
          dayPictureUrl,
          weather,
          temperature
        } = data.results[0].weather_data[0]
        resolve({
          dayPictureUrl,
          weather,
          temperature
        })
      } else {
        message.error('请求天气失败')
      }
    })
  })
}
