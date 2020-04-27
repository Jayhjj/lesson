/**
 * Created by Administrator on 2017/10/24.
 */


var express = require("express");
var async=require('async');

var fs=require("fs");
var router=express.Router();

var DB=require('../../modules/db.js');
var multiparty = require('multiparty');

var md5 = require('md5');

router.get('/',function(req,res){

    //res.send('用户列表')
    //从数据库获取数据
    var page=req.query.page || 1;
    var pageSize=8;
    async.parallel({
        count: function (callback) {
            DB.count('admin',{},function(err,countNum){
                callback(err,countNum);

            })
        },
        list: function (callback) {
            DB.find('admin',{},{},{
                page:page,
                pageSize:pageSize
            },function(err,data){
                callback(err,data)
            })
        }
    }, function(err, results){
        res.render('admin/user/index',{
            list:results.list,
            page:page,
            totalPage:Math.ceil(results.count/pageSize)
        })


    })

})

router.get('/add',function(req,res){

    //res.send('用户列表')

    res.render('admin/user/add');
})


router.post('/doAdd',function(req,res){

    //接收表单的数据  注意enctype="multipart/form-data"

    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {

        //console.log(fields);
        //console.log(files);

        var username=fields.username[0];   /*增加用户验证用户存在不存在用ajax验证*/
        var password=fields.password[0];
        var repassword=fields.repassword[0];
        var status=fields.status[0];
        var face=files.face[0].path;
        var add_time=fields.time[0];
        if(password!=repassword){
            res.render('admin/success',{
                url:'/admin/user/add',
                msg:'对不起密码和确认密码不一样'
            })
        }else{
            DB.insert('admin',{username,password,status,face,add_time},function(err,result){

                if(!err){

                    res.render('admin/success',{
                        url:'/admin/user',
                        msg:'恭喜您增加用户成功!'
                    })
                }
            })

        }



    })


})




router.get('/edit',function(req,res){

    //res.send('用户列表')
    var id=req.query.id;
    //console.log(id)
    DB.find('admin',{"_id":new DB.ObjectId(id)},function(err,data){
        res.render('admin/user/edit',{
            list:data[0]
        });
    })
})


router.post('/doEdit',function(req,res){

    //接收表单的数据  注意enctype="multipart/form-data"

    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {

        //console.log(fields);
        //console.log(files);
        var id=fields.id[0];
        var username=fields.username[0];   /*增加用户验证用户存在不存在用ajax验证*/
        var password=md5(fields.password[0]);
        var repassword=md5(fields.repassword[0]);
        var status=fields.status[0];
        var face=files.face[0].path;
        var originalFilename=files.face[0].originalFilename;
        var add_time=fields.time[0];
        if(password!=repassword){
            res.render('admin/success',{
                url:'/admin/user/edit?id='+id,
                msg:'对不起密码和确认密码不一样'
            })
        }else {
            if (originalFilename) {
                if (password == null) {
                    var json = {
                        username, status, face,add_time
                    };
                } else {
                    var json = {
                        username, password, status, face,add_time
                    };
                }
                DB.update('admin', {"_id": new DB.ObjectId(id)}, json, function (err, data) {
                    if (!err) {

                        res.render('admin/success', {
                            url: '/admin/user',
                            msg: '恭喜您修改用户成功!'
                        })
                    }
                })
            } else {
                if (password == null) {
                    var json = {
                        username, status,add_time
                    };
                    DB.update('admin', {"_id": new DB.ObjectId(id)}, json, function (err, data) {
                        if (!err) {

                            res.render('admin/success', {
                                url: '/admin/user',
                                msg: '恭喜您修改用户成功!'
                            })
                        }
                    })

                } else {
                    var json = {
                        username, password, status,add_time
                    };
                    DB.update('admin', {"_id": new DB.ObjectId(id)}, json, function (err, data) {
                        if (!err) {

                            res.render('admin/success', {
                                url: '/admin/user',
                                msg: '恭喜您修改用户成功!'
                            })
                        }
                    })
                }
                //删除插件生成的错误的图片
                fs.unlink(face);
            }
        }

        //console.log(files);


    })
})


//删除
router.get('/delete',function(req,res){
    var id=req.query.id;
    DB.delete('admin',{"_id":new DB.ObjectId(id)},function(err,result){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/user');
    })
})

module.exports=router;