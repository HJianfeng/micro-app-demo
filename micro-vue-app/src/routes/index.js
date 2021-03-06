
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/list')
  }
];

export default new Router({
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  mode: 'history', // 后端支持可开
  routes
});
