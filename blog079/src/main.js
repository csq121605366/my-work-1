import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import VueSuperagent from 'vue-superagent'
import 'babel-polyfill';

Vue.use(VueRouter);
Vue.use(VueSuperagent);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
