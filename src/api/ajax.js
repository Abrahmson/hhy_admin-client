import axios from "axios"
export default axios
const qs = require('qs')

/* 使用请求拦截器*/
axios.interceptors.request.use( config => {
    if (config.method.toUpperCase() === 'POST' && config.data instanceof Object){
        config.data = qs.stringify(config.data)
    }
    return config
})

axios.interceptors.response.use()

/*使用响应拦截器 */