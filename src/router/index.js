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
    meta: { index: 1 },
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: 'home-page' */ '@/views/home/index.vue'),
        meta: { index: 2 }
      }
    ]
  },
  {
    path: '/monetary-page',
    name: 'MonetaryPage',
    component: Layout,
    redirect: '/monetary-page/monetary',
    meta: { index: 3 },
    children: [
      {
        path: 'monetary',
        component: () =>
          import(
            /* webpackChunkName: 'monetary-page' */ '@/views/monetary/index.vue'
          ),
        meta: { index: 4 }
      }
    ]
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Layout,
    redirect: '/mine/user-info',
    meta: { index: 5 },
    children: [
      {
        path: 'user-info',
        component: () =>
          import(/* webpackChunkName: 'mine' */ '@/views/mine/index.vue'),
        meta: { index: 6 }
      }
    ]
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: () =>
      import(/* webpackChunkName: 'mine' */ '@/views/mine/login/index.vue'),
    meta: { index: 7 }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () =>
      import(/* webpackChunkName: 'mine' */ '@/views/mine/setting/index.vue'),
    meta: { index: 8 }
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
