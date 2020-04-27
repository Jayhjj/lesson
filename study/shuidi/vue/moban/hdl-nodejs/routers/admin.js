var express = require('express');
var router = express.Router();

var index = require('./admin/index.js');
var login = require('./admin/login.js');
var user = require('./admin/user.js');
var shop = require('./admin/shop.js');
var product = require('./admin/product.js');
var product_cate = require('./admin/product_cate.js');
var book = require('./admin/book.js');
var order = require('./admin/order.js');
var news = require('./admin/news.js');
var focus = require('./admin/focus.js');

// 登录判断权限
router.use(function (req,res,next) {
    req.app.locals.username = 'zhanfsan';  //设置全局ejs模板内容
    if(req.session.userinfo && req.session.userinfo.username != ''){
        // req.app.locals.username = req.session.userinfo.username;  //设置全局ejs模板内容
        next();
    }else{
        if(req.url == '/login' || req.url == '/login/toLogin'){
            next();
        }else{
            // res.redirect('/admin/login');
            next();
        }
    }
})

//后台路由
router.use('/',index);                        //后台首页
router.use('/login',login);                  //管理员登录
router.use('/user',user);                    //管理员管理
router.use('/shop',shop);                    //商家管理
router.use('/product',product);              //商品管理
router.use('/product_cate',product_cate);   //商品分类管理
router.use('/book',book);                    //订座管理
router.use('/order',order);                  //商品订单管理
router.use('/news',news);                    //轮播图管理
router.use('/focus',focus);                  //轮播图管理

module.exports = router;

