import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/auth/login//components/Login'
import Registration from '@/pages/auth/registration/components/Registration'
import Chat from '@/pages/chat/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ],
  mode: 'history'
})
