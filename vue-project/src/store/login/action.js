import {
  LOGIN
} from './mutation-type.js'

export default {
  // 参数 state为当前局部状态，rootState为根节点状态
  getLogin({state, commit, rootState}, obj){
    commit('LOGIN', 'sdsfdg')
  },
}
