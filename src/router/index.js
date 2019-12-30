import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index.vue'
import Element from '@/views/element/index.vue'
import Echarts from '@/views/echarts/index.vue'
import Dthree from '@/views/dThree/index.vue'
import Iview from '@/views/iview/index.vue'
import Line from '@/components/echarts/airLines.vue'
import Pie from '@/components/echarts/pie.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 地址栏没有#
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/element',
            name: 'Element',
            component: Element
        },
        {
            path: '/echarts',
            name: 'Echarts',
            component: Echarts,
            children: [
                {
                    path: '/echarts/line',
                    component: Line
                },
                {
                    path: '/echarts/pie',
                    component: Pie
                }
            ]
        },
        {
            path: '/dthree',
            name: 'Dthree',
            component: Dthree
        },
        {
            path: '/iview',
            name: 'Iview',
            component: Iview
        }
    ]
})
