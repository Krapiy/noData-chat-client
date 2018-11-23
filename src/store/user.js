class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUser ({commit}, {login, password, privateKey}) {
      commit('setUser', new User())
      console.log(new User())
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
