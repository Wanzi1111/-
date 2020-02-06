import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import twoaxios from "./until/twoaxios";//引入es6方法的2次封装
Vue.prototype.axios=twoaxios


import "./until/vant.config";//vant组件方法

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
