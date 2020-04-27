var mongoose = require('mongoose')
    // login register  中小型的商城应用
    // mongdb是文档模型(doc)
    // 包容前期的设计 冗余  适合于移动时代，5g物联网时代，数据不规整,动态调整
const userSchema = new mongoose.Schema({
    "userId": String, //生成一个唯一的用户ID
    "name": String,
    "avatar": String,
    "userName": String,
    "userPwd": String,
    "cartList": [ //购物车的数据存在mongodb 杂糅
        {
            productId: String,
            productImg: String,
            productName: String,
            checkout: String,
            productNum: Number,
            productPrice: Number

        }
    ],
    'addressList': [{
        "addressId": Number,
        "userName": String,
        "streerName": String,
        "tel": Number,
        "isDefault": Boolean
    }]

})
module.exports = mongoose.model('User', userSchema);