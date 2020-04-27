var express = require('express');
var router = express.Router();
var async=require('async');
var multiparty = require('multiparty');
var fs=require('fs');
var DB=require('../../modules/db.js');

router.get('/',function (req,res) {
    var keyword=req.query.keyword;  /*获取get传值*/
    var json=keyword?{"title":{$regex:new RegExp(keyword)}}:{};
    var page=req.query.page || 1;
    var pageSize=8;
    async.parallel({
        count: function (callback) {
            DB.count('order',json,function(err,countNum){
                callback(err,countNum);
            })
        },
        list: function (callback) {
            DB.find('order',json,{},{
                page:page,
                pageSize:pageSize
            },function(err,data){
                callback(err,data)
            })
        },
    }, function(err, results){
        //var results={
        //    list:data,
        //    count:countNum
        //}
        res.render('admin/order/index',{
            list:results.list,
            //listcate:results.listcate,
            keyword:keyword,
            page:page,
            totalPage:Math.ceil(results.count/pageSize)
        })
    })
});



router.get('/add',function(req,res){
    var id=req.query.id;
    DB.find('order',{"_id":new DB.ObjectId(id)},function(err,data){
        res.render('admin/order/add',{
            list:data[0]
        });
    });
})

//删除
router.get('/delete',function (req,res) {
    //res.send('删除商品')
    var id=req.query.id;
    //console.log(id)
    DB.delete('order',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
        if(!err){
            res.redirect('/admin/order');
        }
    })
});




module.exports = router;