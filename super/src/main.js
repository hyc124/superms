import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';           
import 'element-ui/lib/theme-chalk/index.css'; 
import App from './App.vue'
import router from './router'
import '@/styles/common.less';
Vue.use(ElementUI);
Vue.prototype.axios=axios;
Vue.config.productionTip = false
//注册elementui

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
