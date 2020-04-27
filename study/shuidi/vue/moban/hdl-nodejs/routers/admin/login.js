var express = require('express');
var router = express.Router();
var md5 = require('md5');

var DB = require('../../modules/db.js');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//登录界面
router.get('/',function (req,res) {
    res.render('admin/login/login');
});

//处理登录表单数据
router.post('/toLogin',function (req,res) {
    var username = req.body.username;
    var password = md5(req.body.password);
    DB.find('admin',{
        username:username,
        password:password
    },function (err,data) {
        if(data.length > 0){
            req.session.userinfo = data[0];
            res.render('admin/success',{msg:'登录成功正在跳转...',url:'/admin'});
        }else{
            res.render('admin/success',{msg:'登录失败，用户或密码错误，请重新登录...',url:'/admin/login'});
        }
    })
});

//退出登录
router.get('/loginOut',function (req,res) {
    delete req.session.userinfo;
    res.redirect('/admin/login');
});

module.exports = router;