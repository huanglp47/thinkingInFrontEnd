import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/view/home/HelloWorld'
import LoginPage from '@/view/login/index.vue'
import ListPage from '@/view/list'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    }
  ]
})
