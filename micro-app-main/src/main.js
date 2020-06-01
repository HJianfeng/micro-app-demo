import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './routes';
import startQiankun from './micro';

import '@/style/base/reset.css'; // A modern alternative to CSS resets
import '@/style/index.scss';
import '@/style/locale.antd.css';

Vue.config.productionTip = false;

startQiankun();
Vue.use(Antd);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
