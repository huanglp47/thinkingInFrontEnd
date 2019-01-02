// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

import store from './store/index'

import 'es6-promise/auto'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(Vuex)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
  }, false);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

