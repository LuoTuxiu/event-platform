import request from '../utils/request'

const getUserInfo = params => {
  return request({
    method: 'get',
    params,
    url: '/api/user/userInfo'
  })
}

const login = params => {
  return request({
    method: 'post',
    params,
    url: '/public/user/login'
  })
}

const registerApi = params => {
  return request({
    method: 'post',
    params,
    url: '/public/user/register'
  })
}

export { login, getUserInfo, registerApi }
