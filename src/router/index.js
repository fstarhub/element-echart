import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 地址栏没有#
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
