import * as types from './mutation-type.js'
import {
    getQuickLogin,
    postLogin,
    getLogOut,
    getCheckMobile,
} from '../../service/getData.js'
import router from '../../router/index.js'
import { vm } from '../../main'

export default {
  // 参数 state为当前局部状态，rootState为根节点状态，rootGetters  DEMO
    getLogin({state, commit, rootState}, obj){
        getQuickLogin(obj, (res)=>{
            console.log(state);
            console.log(rootState.global_job);
            commit(types.LOGIN, 'sdsfdg')
        },true)
    },
    postLoginFn({state, commit, rootState}, obj){
        postLogin(obj, (res)=>{
            commit(types.LOGIN, res) //登录成功
            if(res.state == 0){ //未激活
                vm.$confirm('您的账号还未激活，激活后即可使用', '', {
                    cancelButtonText: '取消',
                    confirmButtonText: '去激活',
                    showClose:false,
                    center:true,
                    roundButton: true,
                }).then(() => {
                    router.push({
                        path: '/accountOp',
                        query:{
                            op: 'active'
                        }
                    })
                }).catch((err) => {
                    // console.log(err.message);
                });
            }else{
                router.replace({path: '/allProject?from=login'})
            }
        },true,(res)=>{
            //登录错误提示
            commit(types.LOGIN_ERROR_TIP, res.message)
        })
    },
    getCheckMobileFn({state, commit, rootState}, obj){
        getCheckMobile(obj, (res)=>{
            if(res.state == 0){ //未激活
                commit(types.USER_STATE, '0')
                vm.$confirm('您的账号还未激活，激活后即可使用', '', {
                    cancelButtonText: '取消',
                    confirmButtonText: '去激活',
                    showClose:false,
                    center:true,
                    roundButton: true,
                }).then(() => {
                    router.push({
                        path: '/accountOp',
                        query:{
                            op: 'active',
                            username: obj.username //传入修改的手机
                        }
                    })
                }).catch((err) => {
                    // console.log(err.message);
                });
            }else if(res.state == '-1'){ //账号不存在
                commit(types.LOGIN_ERROR_TIP, '账号不存在')
            }
        },true)
    },

    getLogOutFn({state, commit, rootState}, obj){
        getLogOut(obj, (res)=>{
            console.log(res)
            commit(types.LOGOUT)
            router.replace({path: '/login'})
        },true)
    },
}
