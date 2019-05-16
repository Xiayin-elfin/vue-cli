import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from './store/index';

Vue.config.productionTip = false;

sync(store, router);
new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app');
