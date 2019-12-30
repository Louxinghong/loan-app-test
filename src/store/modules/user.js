export default {
  namespaced: true,
  state: {
    isLogin: false
  },
  getters: {
    isLogin (state) {
      return state.isLogin
    }
  },
  mutations: {
    CHANGE_LOGIN_STATUS (state, status) {
      console.log(state.isLogin)
      state.isLogin = status
      console.log(state.isLogin)
    }
  },
  actions: {
    changeLoginStatus ({ commit }, status) {
      commit('CHANGE_LOGIN_STATUS', status)
    }
  }
}
