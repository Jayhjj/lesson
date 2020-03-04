import Vue from 'vue'
import App from './App.vue'
// import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //不写css
Vue.config.productionTip = false
    // Vue.use(ElementUI);
new Vue({
    render: h => h(App),
}).$mount('#app')