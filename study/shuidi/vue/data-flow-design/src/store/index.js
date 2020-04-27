import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: false, //是否登入
        userInfo: null, //用户的头像 昵称
        products: {},
        cartList: [] //购物车 数据列表   vuex小型应用
    },
    mutations: {},
    actions: {}
    // modules: {} 根据应用复杂度
})