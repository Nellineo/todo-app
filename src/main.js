// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Master from './components/Layouts/Master.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import { store } from './store/store'
// import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false

window.eventBus = new Vue()

Vue.use(ElementUI);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Master },
  template: '<Master/>'
})


