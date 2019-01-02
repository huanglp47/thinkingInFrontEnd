import Vue from 'vue'
import Vuex from 'vuex'

import login from "./login/index"
import * as types from "./login/mutation-type";
// import lottery from "./lottery/index"

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced:true,
  state: {
    job: "web" //全局
  },
  getters: {//全局
    jobTitle (state){
      return state.job + "developer"
    }
  },
  mutations:{
    ['LOGIN'](state, token){
      state.token = token;
      alert(token)
    },
  },
  actions:{
    getLogin({commit,state}, obj){
      commit('LOGIN', 'sdsfdg')
    },
  },
  modules:{
    login: login,
    // lottery: lottery,
  },
})
