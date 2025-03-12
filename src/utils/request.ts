import axios from 'axios'

/**
 * 封装axios
 */
axios.defaults.withCredentials = true;

const request = axios.create({
  baseURL: ''
})

// 添加请求拦截
request.interceptors.request.use()

// 添加响应拦截
request.interceptors.response.use()

export default request