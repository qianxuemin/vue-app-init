import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index/index';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: Index,
  }],
});
