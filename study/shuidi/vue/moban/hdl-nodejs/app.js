var express = require('express');

var app = express();


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


app.listen(3001);


//设置静态目录
app.use('/public',express.static('public'));
app.use(express.static('public'));

//配置session
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }create-react-app my-app
}))


//设置模板
app.set('view engine','ejs');


//设置路由
var admin = require('./routers/admin.js');
var api = require('./routers/api.js');
var index = require('./routers/index');

app.use('/',index);
app.use('/admin',admin);
app.use('/api',api);