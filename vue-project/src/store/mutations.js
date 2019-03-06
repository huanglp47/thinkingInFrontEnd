import * as types from './mutation-type.js'
import {
    getStateName,
} from '../assets/js/utils'

export default{

    [types.GETCONFIG](state, val){
        state.configInfo = val;
    },

    [types.SET_USER_INFO](state, data){
        if(data.userInfo){
            data.userInfo._state = data.userInfo.state;
            data.userInfo.state = getStateName(data.userInfo.state);
        }
        state.userInfo = data.userInfo;
    },

    [types.UPDATE_LOADING_STATUS] (state, payload) {
        state.isLoading = payload.isLoading
    }
}
