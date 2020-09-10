import axios from 'axios'

const request = axios.create({ baseURL: process.env.VUE_APP_BASE_API })

const errored = error => { // 请求详情拦截错误处理
  console.log(error)
  G.$message.error('请求可能出了点问题')
  return Promise.reject(error)
}

const interceptorsRequest = config => { // 请求拦截器
  return config
}

const interceptorsResponse = async response => { // 响应拦截器
  return response.data
}

request.interceptors.request.use(interceptorsRequest, error => errored(error))
request.interceptors.response.use(interceptorsResponse, error => errored(error))

export default request
