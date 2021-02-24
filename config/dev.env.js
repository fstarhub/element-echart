'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: 'development',
  BASE_API: 'https://mock.mengxuegu.com/mock/6035fa1eca363222f3d579e6/example',
})
