import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/flexible.js'
import './styles/main.less'
import './icons'

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
