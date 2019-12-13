import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import VueLazyload from 'vue-lazyload'
import VueAMap from 'vue-amap'
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/flexible.js'
import './styles/main.less'
import './icons'

Vue.use(VueLazyload)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '7243d2aa043b480d7b4808c9fd90d78b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
Vue.use(Vant)

// 注册全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
