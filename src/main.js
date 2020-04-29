import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import global from './globle/globleApi';
import store from './store/index'
import qs from 'qs'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.global = global;
axios.defaults.baseURL = global.baseURL;

Vue.use(qs)
Vue.use(Antd);


// 在请求头中加token
axios.interceptors.request.use(
  config => {

    config.timeout = 6000

    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('Authorization')
    //console.log(sessionStorage)

    // eslint-disable-next-line no-prototype-builtins
    if (!config.headers.hasOwnProperty('Authorization') && token) {
      config.headers = {
        'Authorization': token,
        'Content-Type': 'application/json',
        'account_type-Type': '1/json'
      }
      // config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });



new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
