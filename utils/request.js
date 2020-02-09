import axios from 'axios'

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://119.27.191.205/'
      : 'http://127.0.0.1:3001/'
})

request.interceptors.request.use(config => {
  console.log(config)
  if (config.method === 'post') {
    config.data = config.params
  }
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  delete config.params
  return config
})

request.interceptors.response.use(res => {
  console.log(res)
  if (res.data.code === 200) {
    return res.data.data
  } else {
    return Promise.reject('some error')
  }
})

export default request
