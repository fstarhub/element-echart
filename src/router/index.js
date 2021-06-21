import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index.vue'
import Element from '@/views/element/index.vue'
import Echarts from '@/views/echarts/index.vue'
import Dthree from '@/views/dThree/index.vue'
import Iview from '@/views/iview/index.vue'
import vxeTable from '@/views/vxeTable/index.vue'

import Line from '@/components/echarts/airLines.vue'
import Pie from '@/components/echarts/pie.vue'
import Liquid from '@/components/echarts/liquidFill.vue'

import project from '@/components/echarts/project.vue'

import Select from '@/components/element/select.vue'
import Search from '@/components/element/search.vue'

import table from '@/components/vxeTable/table.vue'

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
            component: Element,
            redirect: '/element/select',
            children: [
                {
                    path: 'select',
                    component: Select
                },
                {
                    path: 'search',
                    component: Search
                }
            ]
        },
        {
            path: '/echarts',
            name: 'Echarts',
            component: Echarts,
            redirect: '/echarts/line',
            children: [
                {
                    path: '/echarts/line',
                    component: Line
                },
                {
                    path: '/echarts/pie',
                    component: Pie
                },
                {
                    path: 'liquidfill',
                    component: Liquid
                },
                {
                    path: 'project',
                    component: project
                }
            ]
        },
        {
            path: '/vxeTable',
            name: 'vxeTable',
            component: vxeTable,
            children: [
                {
                    path: '/vxeTable/table',
                    component: table
                },
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
