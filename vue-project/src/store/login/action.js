import * as types from './mutation-type.js'
import {
  getQuickLogin
} from '../../service/getData.js'


export default {
  // 参数 state为当前局部状态，rootState为根节点状态，rootGetters
  getLogin({state, commit, rootState}, obj){
    getQuickLogin(obj).then( (res)=>{
        console.log(state);
        console.log(rootState.global_job);
        commit(types.LOGIN, 'sdsfdg')
    },(res)=>{
      console.log(res)
    })
  }
}
