import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '@/layout/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
