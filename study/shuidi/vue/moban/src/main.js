import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from './components/Home.vue';   //首页
import Me from './components/Me.vue';
import More from './components/More.vue';
import Table from './components/Table.vue';   //订餐
import Stores from './components/Stores';
import Myorder from './components/Myorder.vue';
	import Ding from './components/Ding.vue';//我的订单订单
	import Zq from './components/Zq.vue';//我的订单自取
import Book from './components/Book.vue';      //排号信息
import Takeout from './components/Takeout.vue';      //外卖信息
import storesGPS from './components/storesGPS.vue';   //商铺城市定位
import Details from './components/Details.vue'

//mint-ui全部引入
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

const routes =[
{ 
    
    path: '/myorder', component: Myorder,

    children:[  //    /home/about          /home/welcome

        { path: 'zq', component: Zq},
        { path: 'ding', component: Ding },
        { path: '/',redirect:'/myorder/ding' }    /*子路由的默认跳转*/
    ]


},
  { path: '/details', component: Details },
  { path: '/home', component: Home },
  { path: '/me', component: Me },
  { path: '/more', component: More },
  { path: '/stores', component: Stores },
  { path: '/table', component: Table },
	{ path: '/book', component: Book },
	{ path: '/takeout', component: Takeout },
  { path: '/storesGPS', component: storesGPS },

{path:'*',redirect:'/home'} 

  
 ]

const router=new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
