import Vue from 'vue'
import Vuex from 'vuex'

import login from "./login/index"
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false, //页面加载
        userInfo:{
            userId:'',
            username:'',
            realName:'',
            nickName:'',
            _state:'',
            state:'',
            department:'',
            position:'',
        }
    },
    getters: { //全局
    },
    mutations,
    actions,
    modules:{
        login: login,
    },
})
