import * as types from './mutation-type.js'

export default{
  [types.LOGIN](state, token){
    state.token = token;
    console.log('登录成功，token为：'+token);
  },
}
