import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

import store from './store/index'

import promise from 'es6-promise';
promise.polyfill();

import {
  Button,
  Select,
  Loading,
  MessageBox,
  Message,
} from 'element-ui';

Vue.config.productionTip = false
Vue.use(Vuex)

//按需加载，需要引入元素再手动添加
Vue.use(Button)
Vue.use(Select)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

export const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

