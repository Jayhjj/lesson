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
            DB.count('book',json,function(err,countNum){
                callback(err,countNum);
            })
        },
        list: function (callback) {
            DB.find('book',json,{},{
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
        res.render('admin/book/index',{
            list:results.list,
            //listcate:results.listcate,
            keyword:keyword,
            page:page,
            totalPage:Math.ceil(results.count/pageSize)
        })
    })
});



router.post('/doAdd',function (req,res) {
    //res.send('处理增加商品表单传过来的数据')
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);
        var count=fields.count[0];//人数
        var shop_id=fields.shop_id[0];//商家名称
        var _id=fields._id[0];
        var name=fields.name[0];//订餐人姓名
        var tel=fields.tel[0];//手机号
        var time=fields.time[0];//预定时间
        var status=fields.status[0]//状态码
        //根据cid获取分类
        console.log(cate_id);
        DB.find('book',{"_id":new DB.ObjectId(_id)},function(err,data){
            var cate_name=data[0].title;
            //增加数据
            DB.insert("book",{
                title,tel,name,time,count,_id
            }, function (err, result) {
                if(!err){
                    res.redirect('/admin/book');
                }
            })
        })
    })
});



//删除
router.get('/delete',function (req,res) {
    //res.send('删除商品')
    var id=req.query.id;
    //console.log(id)
    DB.delete('book',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
        if(!err){
            res.redirect('/admin/book');
        }
    })
});

module.exports = router;