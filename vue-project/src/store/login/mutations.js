import * as types from './mutation-type.js'

export default{
  [types.LOGIN](state, token){
    state.token = token;
  },
}
