'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" https://easy-mock.com/mock/5eaf8b1da47fe9570ba134cf/example"',
})
