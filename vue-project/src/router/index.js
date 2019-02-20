import Vue from 'vue'
import Router from 'vue-router'
import { ROUTER_BASE } from '../config/apiEnv'

const HomePage = () => import('../view/home/HomePage.vue')
const AgreementPage = () => import('../view/login/agreement.vue')
const LoginPage = () => import('../view/login/login.vue')
const ListPage = () => import('../view/list.vue')
const NotFoundPage = () => import('../view/404.vue')

Vue.use(Router)
const router =  new Router({
  base:ROUTER_BASE,
  mode:'history',
  scrollBehavior (to, from, savedPosition) { //全局监听页面滚动
      // `to` 和 `from` 都是路由对象
      console.log(to);
      console.log(from);
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter (to, from, next) {//路由独享的守卫
        console.log('【局部路由信息】进入'+to.name);
        next()
      },
    },
    {
      path: '/login/agreement',
      component: AgreementPage,
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    },{
      path: '*',
      name: 'not found',
      component: NotFoundPage
    }
  ]
})
router.beforeEach((to, from, next) => {  //全局前置守卫,监听路由
  // let token = localStorage.getItem('token');
  // if(to.name == 'login'){
  //   if(token){
  //     router.push({path: '/home'})
  //   }
  // }
  next()
})
export default router
