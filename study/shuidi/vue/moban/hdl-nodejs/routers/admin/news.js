var express = require("express");

var async=require('async');
var router=express.Router();
var multiparty = require('multiparty');

var fs=require('fs');
var DB=require('../../modules/db.js');

router.get('/',function(req,res){

    //res.send('新闻分类')

    //查询新闻分类的数据

    //DB.find('news',{},function(err,data){
    //
    //    console.log(data);
    //
    //    res.render('admin/news/index',{
    //
    //        list:data
    //    })
    //})

    //DB.find('news',{},{"_id":1,'title':1},function(err,data){
    //
    //    console.log(data);
    //
    //    res.render('admin/news/index',{
    //
    //        list:data
    //    })
    //})

    var page=req.query.page || 1;

    var pageSize=8;

//串行
//
//    DB.count('news',{},function(err,countNum){
//
//        //console.log(data);
//        DB.find('news',{},{"_id":1,'title':1},{
//            page:page,
//            pageSize:pageSize
//        },function(err,data){
//            console.log(data);
//            res.render('admin/news/index',{
//                list:data,
//                page:page,
//                totalPage:Math.ceil(countNum/pageSize)
//            })
//        })
//    })

    //并行
    async.parallel({
        count: function (callback) {
            DB.count('news',{},function(err,countNum){
                callback(err,countNum);

            })
        },
        list: function (callback) {
            DB.find('news',{},{},{
                page:page,
                pageSize:pageSize
            },function(err,data){
                callback(err,data)
            })
        }
    }, function(err, results){

        //var results={
        //    list:data,
        //    count:countNum
        //}
        res.render('admin/news/index',{
            list:results.list,
            page:page,
            totalPage:Math.ceil(results.count/pageSize)
        })


    })





})
router.get('/add',function(req,res){


    //查询新闻分类表

    DB.find('news_cate',{},function(err,data){
        res.render('admin/news/add',{

            catelist:data
        });
    })




})

router.post('/doAdd',function(req,res){


    //获取表单

    //接收表单的数据  注意enctype="multipart/form-data"

    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {

        //console.log(fields);
        //console.log(files);
        var title=fields.title[0];   /*增加用户验证用户存在不存在用ajax验证*/
        var author=fields.author[0];
        var description=fields.description[0];
        var content=fields.content[0];
        var status=fields.status[0];
        var pic=files.pic[0].path;
        var add_time=fields.time[0];
            //增加数据
            DB.insert("news",{
                title,author,description,content,status,pic,add_time
            }, function (err, result) {
                if(!err){

                    res.redirect('/admin/news');
                }
            })
        })

})
router.get('/edit',function(req,res){


    var id=req.query.id;

    //查询新闻分类表

      /*分类*/

        DB.find('news',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/

            res.render('admin/news/edit',{
                list:data[0]
            });
        })



    //新闻对应的数据






})



router.post('/doEdit',function(req,res){


    //获取表单

    //接收表单的数据  注意enctype="multipart/form-data"

    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {

        //console.log(fields);
        //console.log(files);
        var id=fields.id[0];
        var title=fields.title[0];   /*增加用户验证用户存在不存在用ajax验证*/
        var author=fields.author[0];
        var description=fields.description[0];
        var content=fields.content[0];
        var status=fields.status[0];
        var pic=files.pic[0].path;
        var add_time=fields.time[0];

        //根据cid获取分类
        var originalFilename=files.pic[0].originalFilename;
        if(originalFilename){
            var json ={
                title,author,description,content,status,pic,add_time
            };
        }else{
            var json ={
                title,author,description,content,status,add_time
            };
            //删除插件生成的错误的图片
            fs.unlink(pic);
        }



            DB.update("news",{'_id':new DB.ObjectId(id)},json, function (err, result) {
                if(!err){
                    res.redirect('/admin/news');
                }
            })



        })


    })









router.post('/upload',function(req,res){
    //执行上传图片
    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);

        var uploadurl='/'+files.filedata[0].path;
        res.json({"err":"","msg":uploadurl});  /*响应数据*/


        //res.send(); /*返回内容*/
        //
        //res.json  /*返回json数据*/
        //
        //res.jsonp()  /*处理jsonp*/

    })


})

router.get('/doDdd',function(req,res){
    var id=req.query.id;
    DB.delete('news',{"_id":new DB.ObjectId(id)},function(err,result){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/news');
    })
})

module.exports=router;