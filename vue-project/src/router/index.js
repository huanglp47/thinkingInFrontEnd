import Vue from 'vue'
import Router from 'vue-router'
import { ROUTER_BASE } from '../config/apiEnv'

// import store from '../store/index'

//login
const LoginPage = () => import('../view/login/login.vue')
const LoginDemoPage = () => import('../view/login/loginDemo.vue')

//demo for the main frame
const HomePage = () => import('../view/HomePage.vue')
const ThirdPage = () => import('../view/third/index.vue')
const MenuPage1 = () => import('../view/menu/index1.vue')
const MenuPage2 = () => import('../view/menu/index2.vue')

const UserHomePage = () => import('../view/user/userHome.vue') // 个人中心主框架页面
const UserCenterPage = () => import('../view/user/userCenter.vue') //个人中心页面
const ChangePhonePage = () => import('../view/user/changePhone.vue')
const ChangePasswordPage = () => import('../view/user/changePassword.vue')

const ListPage = () => import('../view/list.vue')
const NotFoundPage = () => import('../view/404.vue')
const AccountOpPage = () => import('../view/AccountOp.vue')
const AllProject = () => import('../view/AllProject.vue')

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
        children:[
            {
            path:'menu1',
            component: MenuPage1,
            },{
                path:'menu2',
                component: MenuPage2,
            },{
                path: 'third',
                name: 'ThirdPage',
                component: ThirdPage,
            }
        ]
    },
    {
      path: '/user',
      component: UserHomePage,
      children:[
        {
        path:'',
        redirect:'userCenter',
        },{
          path:'userCenter',
          component: UserCenterPage,
        },{
          path:'changePhone',
          component: ChangePhonePage,
        },{
          path:'changePassword',
          component: ChangePasswordPage,
        }
      ]
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
      path: '/loginDemo',
      name: 'logindemo',
      component: LoginDemoPage,
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    },
    {
      path: '/accountOp', //op=reset,active
      name: 'AccountOpPage',
      component: AccountOpPage
    },
    {
      path: '/allProject',
      name: 'AllProject',
      component: AllProject,
      // beforeEnter: (to, from, next) => {
      //   // 如果头部点击直接进入
      //   if(to.query.from === 'header') {
      //     next();
      //   }else {
      //     // 判断之前是否有进过项目
      //     let mallNo = localStorage.getItem('mallNo');
      //     if(mallNo) {
      //       router.push({path: `/home?mallCode=${mallNo}`})
      //     }else {
      //       next();
      //     }
      //   }
      // }
    },
    {
      path: '*',
      name: 'not found',
      component: NotFoundPage
    }
  ]
})
// router.beforeEach((to, from, next) => {  //全局前置守卫,监听路由
//     // let token = localStorage.getItem('token');
//     // if(to.name == 'login'){
//     //   if(token){
//     //     router.push({path: '/home'})
//     //   }
//     // }
//     store.commit('UPDATE_LOADING_STATUS', {isLoading: true})
//     next()
// })
// router.afterEach(function (to) {
//     setTimeout(function(){
//         store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
//     },200)
// })

export default router
