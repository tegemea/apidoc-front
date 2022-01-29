import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import 'bootstrap';

// fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDharmachakra)

Vue.component('fai', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { store } from '../store/store'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios;
Vue.prototype.$jquery = jQuery;

// IPs for communications
Vue.prototype.$baseURL = '192.168.1.2';
Vue.prototype.$apiURL = '192.168.1.2/api_doc';

Vue.use(VueRouter)

import Home from '@/components/Home'
import Documentation from '@/components/Documentation'

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Documentation }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
