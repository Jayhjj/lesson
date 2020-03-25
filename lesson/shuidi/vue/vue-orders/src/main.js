import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from '@/mock'
//后台管理项目 ，数据报表 老板，运营  ，订单数据如何？
//事件，分页
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')