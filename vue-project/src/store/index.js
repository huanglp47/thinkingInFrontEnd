import Vue from 'vue'
import Vuex from 'vuex'

import login from "./login/index"
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global_job: "web", //全局
    configInfo: '',
    mallList:[],
    home:{
      doSomething:''
    },
    user:{

    }
  },
  getters: {//全局
  },
  mutations,
  actions,
  modules:{
    login: login,
  },
})
