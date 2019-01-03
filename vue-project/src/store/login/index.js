import mutations from './mutations'
import actions from './action'
import getters from './getter'

const state ={
    isLogin:false,
    userName: 'asdsd',
    token:'1111111111',
};

// 在模块中，state 是被限制到模块的命名空间下，需要命名空间才能访问。 但actions 和mutations，在默认情况下，它们是注册到全局命名空间下的
// actions, mutations 和getters, 它们获得的默认参数不是全局的，都是局部的
export default {
  state,
  getters,
  actions,
  mutations
}
