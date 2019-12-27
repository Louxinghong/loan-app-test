import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: 'home-page' */ '@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/monetary-page',
    name: 'MonetaryPage',
    component: Layout,
    children: [
      {
        path: 'monetary',
        component: () =>
          import(
            /* webpackChunkName: 'monetary-page' */ '@/views/monetary/index.vue'
          )
      }
    ]
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Layout,
    children: [
      {
        path: 'user-info',
        component: () =>
          import(/* webpackChunkName: 'mine' */ '@/views/mine/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: 'test' */ '@/layout/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
