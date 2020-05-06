// 接口请求模块

import axios from './request'
const BASE = '/api'

export const reqHeros = axios ({
  method: 'GET',
  url: BASE+'/example'
})