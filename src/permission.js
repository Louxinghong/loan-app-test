import router from './router'
import store from './store'

const whiteList = ['/setting', '/my-info']

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    if (!store.state.user.isLogin) {
      next({ name: 'UserLogin', query: { redirect: to.path } })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {})
