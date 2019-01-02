import Vue from 'vue'
import Vuex from 'vuex'

import login from "./login/index"
// import lottery from "./lottery/index"

Vue.use(Vuex);

export default new Vuex.Store({
  // namespaced:true,
  state: {
    job: "web" //全局
  },
  getters: {//全局
    jobTitle (state){
      return state.job + "developer"
    }
  },
  modules:{
    login: login,
    // lottery: lottery,
  }
})
