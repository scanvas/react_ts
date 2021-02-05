import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

const http = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  baseURL: process.env.NODE_ENV === 'production' ? '' : '',
  withCredentials: true,
})

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.headers.Authorization = 'your token'
    console.log(config)
    return config
  },
  // eslint-disable-next-line promise/no-promise-in-callback
  (error: AxiosError) => Promise.reject(error),
)

// 响应拦截
http.interceptors.response.use((response: AxiosResponse) =>
  // 在这里做响应拦截的逻辑
  Promise.resolve(response),
)

export default function request<T>(options: AxiosRequestConfig) {
  return http.request<T>(options)
}
