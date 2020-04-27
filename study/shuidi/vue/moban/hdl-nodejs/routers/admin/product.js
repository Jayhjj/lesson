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
            DB.count('product',json,function(err,countNum){
                callback(err,countNum);
            })
        },
        list: function (callback) {
            DB.find('product',json,{},{
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
        res.render('admin/product/index',{
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
    //res.send('增加商品')
    DB.find('product_cate',{},function(err,data){
        res.render('admin/product/add',{
            catelist:data
        });
        //console.log(data)
    })

});
router.post('/doAdd',function (req,res) {
    //res.send('处理增加商品表单传过来的数据')
    var form = new multiparty.Form();
    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */
    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);
        var title=fields.title[0];
        var pic=files.pic[0].path;
        var cate_id=fields.cate_id[0];
        var price=fields.price[0];
        var description=fields.description[0];
        var status=fields.status[0];
        var add_time=fields.time[0];
        //根据cid获取分类
        console.log(cate_id);
        DB.find('product_cate',{"_id":new DB.ObjectId(cate_id)},function(err,data){
            var cate_name=data[0].title;
            //增加数据
            DB.insert("product",{
                title,pic,cate_name,price,description,status,add_time,cate_id
            }, function (err, result) {
                if(!err){
                    res.redirect('/admin/product');
                }
            })
        })
    })
});

//修改
router.get('/edit',function (req,res) {
    //res.send('修改商品')
    var id=req.query.id;
    //查询图片分类表
    DB.find('product_cate',{},function(err,catedata){   /*分类*/
        DB.find('product',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
            res.render('admin/product/edit',{
                catelist:catedata,
                list:data[0]
            });
        })
    })
});
router.post('/doEdit',function (req,res) {
    //res.send('处理修改商品表单传过来的数据')
    var form = new multiparty.Form();
    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */
    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);
        var id=fields.id[0];
        var title=fields.title[0];
        var cate_id=fields.cate_id[0];
        var add_time=fields.time[0];
        var price=fields.price[0];
        var description=fields.description[0];
        var status=fields.status[0];
        var pic=files.pic[0].path;
        //根据cid获取分类
        DB.find('product_cate',{"_id":new DB.ObjectId(cate_id)},function(err,data){  /*获取选择的分类*/
            var cate_name=data[0].title;
            //判断有没有修改图片
            var originalFilename=files.pic[0].originalFilename;
            if(originalFilename){
                var json ={
                    title,pic,cate_name,price,description,status,add_time,cate_id
                };
            }else{
                var json ={
                    title,cate_name,price,description,status,add_time,cate_id
                };
                //删除插件生成的错误的图片
                fs.unlink(pic);
            }
            DB.update("product",{'_id':new DB.ObjectId(id)},json, function (err, result) {
                if(!err){
                    res.redirect('/admin/product');
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
    DB.delete('product',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/
        if(!err){
            res.redirect('/admin/product');
        }
    })
});



module.exports = router;