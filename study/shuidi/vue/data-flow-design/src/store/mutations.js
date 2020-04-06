// 围绕转态，设计改变
// user  cartList   products
// login false => true
import {
    RECORD_USERINFO,
    ADD_CART,
    INCREMENT_QUANTITY,
    CHECKOUT

} from './mutation-types'
export default {
    //login {avatar:'',username:''}
    [RECORD_USERINFO]() {
        state.userInfo = info;
        state.login = true
    },
    //cartList?
    [ADD_CART](state, { productId }) {

    },
    [INCREMENT_QUANTITY](state) {

    },
    [CHECKOUT]() {

    }
}