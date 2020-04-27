var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var DB=require('../../modules/db.js');
var async=require('async');
router.get('/',function (req,res) {
    //res.send('商品分类')
    var keyword=req.query.keyword;  /*获取get传值*/
    var json=keyword?{"title":{$regex:new RegExp(keyword)}}:{};
    var page=req.query.page || 1;
    var pageSize=8;
    async.parallel({
        count: function (callback) {
            DB.count('product_cate',json,function(err,countNum){
                callback(err,countNum);
            })
        },
        list: function (callback) {
            DB.find('product_cate',json,{},{
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
        res.render('admin/product_cate/index',{
            list:results.list,
            //listcate:results.listcate,
            keyword:keyword,
            page:page,
            totalPage:Math.ceil(results.count/pageSize)
        })
    })
});

//增加
router.get('/add',function (req,res) {
    //res.send('增加商品分类')
    res.render('admin/product_cate/add');

});
router.post('/doAdd',function (req,res) {
    //res.send('处理增加商品分类表单传过来的数据')
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        var title=fields.title[0];
        var description=fields.description[0];
        var status=fields.status[0];
        var add_time=fields.time[0];
        DB.insert('product_cate',{title,status,description,add_time},function (err, result) {
            if(!err){
                res.redirect('/admin/product_cate');
            }
        })
    })
});

//修改
router.get('/edit',function (req,res) {
    //res.send('修改商品分类')
    var id=req.query.id;
    DB.find('product_cate',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
        res.render('admin/product_cate/edit',{
            list:data[0]
        });
    });
});
router.post('/doEdit',function (req,res) {
    //res.send('处理修改商品分类表单传过来的数据')
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        var id=fields.id[0];
        var title=fields.title[0];
        var add_time=fields.time[0];
        var description=fields.description[0];
        var status=fields.status[0];
        DB.update('product_cate',{"_id":new DB.ObjectId(id)},{title,status,description,add_time},function (err, result) {
            if(!err){
                res.redirect('/admin/product_cate');
            }
        })
    })
});

//删除
router.get('/delete',function (req,res) {
    //res.send('删除商品分类')
    var id=req.query.id;
    //console.log(id)
    DB.delete('product_cate',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
        if(!err){
            res.redirect('/admin/product_cate');
        }
    })
});
module.exports = router;