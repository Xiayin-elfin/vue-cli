import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import('./components/HelloWorld.vue')
      },
      {
        path: '/demo1',
        name: 'demo1',
        component: () => import('./view/demo1.vue')
      }
    ]
});
