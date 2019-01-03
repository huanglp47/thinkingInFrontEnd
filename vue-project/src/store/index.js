import Vue from 'vue'
import Vuex from 'vuex'

import login from "./login/index"
import * as types from "./login/mutation-type";
// import lottery from "./lottery/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global_job: "web" //全局
  },
  getters: {//全局
    jobTitle (state){
      return state.global_job + "developer"
    }
  },
  modules:{
    login: login,
    // lottery: lottery,
  },
})
