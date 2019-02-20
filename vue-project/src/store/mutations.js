import * as types from './mutation-type.js'

export default{
  [types.GETCONFIG](state, val){
    state.configInfo = val;
  },
}
