import * as types from './mutation-type.js'

export default{
    [types.LOGIN](state, data){
        state.token = data.token;

        data.token && localStorage.setItem('token',  data.token);
        data && data.userInfo && data.userInfo.username && localStorage.setItem('username', data.userInfo.username);

        data && localStorage.setItem('userInfo', JSON.stringify(data));

        console.log('登录成功，token为：'+ data.token);
    },
    [types.LOGIN_ERROR_TIP](state, msg){
        state.loginErrorTip = msg;
    },
    [types.REMOVE_LOGIN_ERROR_TIP](state, msg){
        state.loginErrorTip = '';
    },
    [types.USER_STATE](state, val){
        state.userState = val;
    },
    [types.LOGOUT](state, data){
        state.token = '';
        localStorage.removeItem('token');
        // localStorage.removeItem('mallNo');
        // localStorage.removeItem('mallName');
        localStorage.removeItem('userInfo'); //清除用户信息

        console.log('退出登录成功');
    },
}
