import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import 'bootstrap'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios;
Vue.prototype.$jquery = jQuery;

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
