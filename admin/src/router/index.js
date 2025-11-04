import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import ViewAdmin from '@/components/ViewAdmin.vue'
import ViewIndex from '@/components/ViewIndex.vue'
import ViewUserManage from '@/components/ViewUserManage.vue'
import ViewHistoryManage from '@/components/ViewHistoryManage.vue'
import ViewResultManage from '@/components/ViewResultManage.vue'
import ViewCashManage from '@/components/ViewCashManage.vue'
import ViewErrorManage from '@/components/ViewErrorManage.vue'
import ViewPayManage from '@/components/ViewPayManage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/admin',
        component: ViewAdmin,
        redirect: "/admin/index",
        meta: {auth: true},
        children: [
            {
                path: '/admin/index',
                component: ViewIndex,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/user',
                component: ViewUserManage,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/results',
                component: ViewResultManage,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/history',
                component: ViewHistoryManage,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/error',
                component: ViewErrorManage,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/cash',
                component: ViewCashManage,
                meta: {auth: true},
            },
            {
                path: '/admin/manage/pay',
                component: ViewPayManage,
                meta: {auth: true},
            },
        ]
    }
  ]
})
