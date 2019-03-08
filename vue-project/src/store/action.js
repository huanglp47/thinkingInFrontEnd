import * as types from './mutation-type.js'
import { aaAlert } from '../assets/js/utils';
import {
    getConfig,
    getUserInfo,
} from '../service/getData.js'

export default {
    // 参数 state为当前局部状态，rootState为根节点状态，rootGetters  DEMO
    getConfigFn({state, commit, rootState}, obj){
        getConfig(obj, (res)=>{
            console.log(state);
            console.log(rootState.global_job);
            commit(types.GETCONFIG, '全局action')
        },true, (res)=>{
            // 自定义错误
            mixcAlert( '[自定义错误]'+res.message , '出错啦！', {
            confirmButtonText: '确定',
            });
        })
    },
    getUserInfoFn({state, commit, rootState}, obj){
        getUserInfo(obj,(res)=>{
            commit(types.SET_USER_INFO, res)
        })
    }

}
