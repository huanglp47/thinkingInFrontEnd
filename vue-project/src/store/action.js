import * as types from './mutation-type.js'
import { mixcAlert } from '../assets/js/utils';
import {
  getConfig
} from '../service/getData.js'

export default {
  // 参数 state为当前局部状态，rootState为根节点状态，rootGetters
  getConfigFn({state, commit, rootState}, obj){
    getConfig(obj, (res)=>{
      console.log(state);
      console.log(rootState.global_job);
      commit(types.GETCONFIG, '全局action')
    },true
      , (res)=>{
      // 自定义错误
        mixcAlert( '[自定义错误]'+res.message , '出错啦！', {
          confirmButtonText: '确定',
        });
    }
    )
  }
}
