import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import components from './components'
import VueLazyload from 'vue-lazyload'
import VueAMap from 'vue-amap'
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/flexible.js'
import './styles/main.less'
import './icons'
import './permission'

Vue.use(VueLazyload)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '7243d2aa043b480d7b4808c9fd90d78b',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
Vue.use(Vant)

// 注册全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

// 解决：V3.1.0版本及以上里面新增功能：push和replace方法会返回一个promise, 你可能在控制台看到未捕获的异常
// 对router原型链上的push和replace方法进行重写，这样就不用每次调用方法都要加上catch
// 这里主要解决从我的信息页面前往该页面上的其他router，beforeEach中判断是否登录，未登录则前往登录页面，若前往登录页面则会抛出异常
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
