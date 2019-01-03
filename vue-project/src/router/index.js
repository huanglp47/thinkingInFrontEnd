import Vue from 'vue'
import Router from 'vue-router'

// const HelloWorld = (resolve) => require(['../view/home/HelloWorld.vue'], resolve)
// const AgreementPage = (resolve) => require(['../view/login/agreement.vue'], resolve)
// const LoginPage = (resolve) => require(['../view/login/login.vue'], resolve)
// const ListPage = (resolve) => require(['../view/list.vue'], resolve)
// const NotFoundPage = (resolve) => require(['../view/404.vue'], resolve)

const HelloWorld = () => import('../view/home/HelloWorld.vue')
const AgreementPage = () => import('../view/login/agreement.vue')
const LoginPage = () => import('../view/login/login.vue')
const ListPage = () => import('../view/list.vue')
const NotFoundPage = () => import('../view/404.vue')

Vue.use(Router)

const router =  new Router({
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
      name: 'HelloWorld',
      component: HelloWorld,
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
  if(to.name == 'HelloWorld'){
      console.log('【全局路由信息】进入首页：'+to.name);
  }
  next()
})
export default router
