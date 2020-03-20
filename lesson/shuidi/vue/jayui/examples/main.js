import Vue from 'vue'
import App from './App.vue'
import jayui from '../packages'

Vue.use(jayui)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')