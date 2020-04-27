var express = require('express');
var router = express.Router();
var bodyparser=require('body-parser');
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
var DB=require('../modules/db.js');
var dateTime=require('date-time');

router.get('/focus',function(req,res){
    DB.find('focus',{},function(err,data){
        res.jsonp({
            "result":data
        })
    });
    // http://localhost:3001/api/focus
    // res.send('focus');
})
router.get('/product',function(req,res){
    DB.find('product',{},function(err,data){
        res.jsonp({
            "result":data
        })
    });
    //http://localhost:3001/api/product?page=1
    //res.send('newslist');
})
router.get('/product_cate',function(req,res){
    DB.find('product_cate',{},function(err,data){
        res.jsonp({
            "result":data
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/product_cate
})

router.get('/news',function(req,res){
    var page=req.query.page || 1;
    var pageSize=6;
    DB.find('news',{},{},{
        page,
        pageSize
    },function(err,data){
        res.jsonp({
            "result":data,
            "page":page
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/news?page=1
})

router.get('/shop',function(req,res){
    DB.find('shop',{},function(err,data){
        res.jsonp({
            "result":data
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/shop?page=1
})

router.get('/admin',function(req,res){
    var page=req.query.page || 1;
    var pageSize=6;
    DB.find('admin',{},{},{
        page,
        pageSize
    },function(err,data){
        res.jsonp({
            "result":data,
            "page":page
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/admin?page=1
})
//order  测试端口
router.get('/order',function(req,res){
    DB.find('order',{},function(err,data){
        res.jsonp({
            "result":data,
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/order
})
//post请求
router.post('/order',function(req,res){
    console.log(req.body);
    var product=req.body.product;
    var all_price=req.body.all_price;
    var tel=req.body.tel;
    var sex=req.body.sex;
    var name=req.body.name;
    var shop_name=req.body.shop_name;
    var add_time=dateTime({date:new Date()});
    DB.insert('order',{product,all_price,name,tel,shop_name,add_time,status:0,sex},function(err,data){
        //console.log(data);
        if(!err){
            res.jsonp('提交成功');
            return;
        }
        res.jsonp('提交失败');
    })
    //res.send('newslist');
    //http://localhost:3001/api/order
    /*  //vue  post请求方式
    this.$http.post("http://localhost:3001/api/order", {
     name: "111"
     }).then(function(res) {
     // 处理成功的结果
     //alert(res.body);
     }, function(res) {
     // 处理失败的结果
     })
     */
})
//book  测试端口
router.get('/book',function(req,res){
    DB.find('book',{},function(err,data){
        res.jsonp({
            "result":data
        })
    });
    //res.send('newslist');
    //http://localhost:3001/api/book
})
router.post('/book',function(req,res){
    console.log(req.body);
    var time=req.body.time;
    var count=req.body.count;
    var name=req.body.name;
    var tel=req.body.tel;
    var sex=req.body.sex;
    var add_time=dateTime({date:new Date()});
    DB.insert('book',{time,count,name,tel,sex,add_time,status:0},function(err,data){
        //console.log(data);
        if(!err){
            res.jsonp('提交成功');
            return;
        }
        res.jsonp('提交失败');
    })
    //res.send('newslist');
    //http://localhost:3001/api/book
})

router.get('/foods',function(req,res){
    DB.find('product_cate',{},function(err,data){
        if(err){
            console.log(err);
            return false;
        }
        var arr=data;
        (function getData(i){
            if(i==data.length){
                //console.log(arr);
                res.jsonp({"result":arr});
                return false;
            }
            var cate_id=data[i]._id.toString();
            DB.find('product',{"cate_id":cate_id},function(err,result){
                //console.log(data[i]._id);
                arr[i]['foods']=result;
                getData(++i);
            })

        })(0)
    })
})

module.exports = router;