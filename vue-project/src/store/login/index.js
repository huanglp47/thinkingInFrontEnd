import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getter'

Vue.use(Vuex);

const state ={
    isLogin:false,
    userName: 'asdsd',
    token:'1111111111',
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
