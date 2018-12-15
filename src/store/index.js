import Vue from 'vue'
import Vuex from 'vuex'

import login from './../pages/auth/login/store'
import registration from './../pages/auth/registration/store'
import user from './user'
import common from './common'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: {
      ...login
    },
    registration: {
      ...registration
    },
    user,
    common,
    chat
  }
})
