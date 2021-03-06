// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import '@/assets/css/reset.css'
import '@/assets/js/common.js'
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false

axios.defaults.baseURL = process.env.API_HOST

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
