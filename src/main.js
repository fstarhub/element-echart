// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入mock
import './mock/mockjs'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 事件总线（跨组件通信）（写法一）
Vue.prototype.$EventBus = new Vue()
// 事件总线（跨组件通信）（写法三）
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()

// 使用vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
/* eslint-disable no-new */
//根组件--（this.$root）
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
  // 事件总线（跨组件通信）（写法二）
  // data:{
  //     $EventBus: new Vue()
  // }
})
