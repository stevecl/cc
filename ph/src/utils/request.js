import axios from 'axios'
import { ElMessage } from 'element-plus'
import { tansParams } from "./index";
import cache from './cache'
import globalConfig from '@/config'

// 是否显示重新登录
export let isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
  baseURL: globalConfig.baseURL,
  timeout: 100000,
})

// request拦截器
service.interceptors.request.use(config => {
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  config.headers['token'] = 'eyJhbGciOiJIUzI1NiIsIlR5cGUiOiJKd3QiLCJ0eXAiOiJKV1QifQ.eyJkZXB0TmFtZSI6IuaKgOacr-mDqCIsImFncnRTdGFydFRpbWUiOiIyMDE4LTA5LTE3IDE2OjMzOjI2IiwiYWdydEVuZFRpbWUiOiIyMDMwLTA4LTAxIDE2OjMyOjUzIiwiYWRtaW5UeXBlIjoiMCIsImNvbXBhbnlOYW1lIjoi6LSd5bCP6ZuGIiwic2V4IjoiMSIsImFjY291bnRUeXBlIjoiUExBVCIsImRlcHRJZCI6IjIyMTI2NjYzOTMyNDAzMzYiLCJyZW1hcmsiOiIiLCJ0eXBlIjoiRElSRUNUIiwiY29tcGFueUlkIjoiMSIsImlzRmluYW5jaWFsIjoiMCIsImxvZ2luTmFtZSI6IjE1MDIzMTcyOTk0Iiwic3lzdGVtVHlwZSI6IlBMQVQiLCJsb2dpblVzZXJJZCI6IjIyMTMyNjM3NTA1ODcyNjkiLCJ0ZWwiOiIxNTAyMzE3Mjk5NCIsInBvc2l0aW9uIjoi5rWL6K-VIiwic3RhdGUiOiIxIiwiZW1wbE5hbWUiOiLlsYjmmJ_lu7ciLCJleHAiOjE3MjU1MjQwMzYsImVtcGxDb2RlIjoiMDA3In0.0fUK9ZTZx-6XVY0QZdJ5Ohu_NWS4Y_y5amuSV_YQzm8' // 让每个请求携带自定义token 请根据实际情况自行修改
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params);
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const s_url = sessionObj.url;                  // 请求地址
      const s_data = sessionObj.data;                // 请求数据
      const s_time = sessionObj.time;                // 请求时间
      const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        return Promise.reject(new Error('数据正在处理，请勿重复提交'))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    let { code = 200, message, result } = res.data
    if (code !== 200) {
      ElMessage ({ message, type: 'error' })
      return Promise.reject(message)
    } else {
      return result
    }
  },
  error => {
    let { message, response } = error;
    ElMessage ({ message: response.data.message, type: 'error' })
    return Promise.reject(error)
  }
)

export default service
