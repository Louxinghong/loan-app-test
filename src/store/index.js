import Vue from 'vue'
import Vuex from 'vuex'
import requireAll from '@/utils/requireAll'

Vue.use(Vuex)

const requireModules = require.context('./modules', false, /\.js$/)
const modules = requireAll(requireModules)

export default new Vuex.Store({
  modules
})
