import Vue from 'vue'
//导入和注册element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
// 基础样式
import './style/base.css'
new Vue({
  render: h => h(App),
  //挂载在vue实例上
  router
})
//挂载到id为app的div上面
.$mount('#app')
