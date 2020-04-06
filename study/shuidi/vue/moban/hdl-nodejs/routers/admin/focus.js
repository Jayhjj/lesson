
var express = require("express");
var router=express.Router();
var DB=require('../../modules/db.js');
var multiparty = require('multiparty');
var fs=require('fs');


router.get('/',function(req,res){
    //res.send('用户列表')
    //从数据库获取数据
    DB.find('focus',{},function(err,data){
        //console.log(data);
        res.render('admin/focus/index',{
            list:data
        });
        //console.log(data)
    })


})

router.get('/add',function(req,res){
    res.render('admin/focus/add');
})


router.post('/doAdd',function(req,res){

    //接收表单的数据  注意enctype="multipart/form-data"

    var form = new multiparty.Form();

    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */

    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);
        var title=fields.title[0];
        var status=fields.status[0];
        var pic=files.pic[0].path;
        var add_time=fields.time[0];
        DB.insert('focus',{title,status,pic,add_time},function(err,result){
                if(!err){
                    res.render('admin/success',{
                        url:'/admin/focus',
                        msg:'恭喜您增加图片成功!'
                    })
                }
            })





    })


})




router.get('/edit',function(req,res){

    var id=req.query.id;


    DB.find('focus',{"_id":new DB.ObjectId(id)},function(err,data){  /*列表*/

        res.render('admin/focus/edit',{

            list:data[0]
        });
    })

})
router.post('/doEdit',function(req,res){
    var form = new multiparty.Form();
    form.uploadDir='public/admin/upload';  /*上传图片的路径    注意：路径相对于根目录 */
    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        //console.log(files);
        var id=fields.id[0];
        var add_time=fields.time[0];
        var title=fields.title[0];
        var status=fields.status[0];

        var pic=files.pic[0].path;

            var originalFilename=files.pic[0].originalFilename;
            if(originalFilename){
                var json ={
                    title,status,pic,add_time
                };
            }else{
                var json ={
                    id,title,status,add_time
                };
                //删除插件生成的错误的图片
                fs.unlink(pic);
            }


            DB.update("focus",{'_id':new DB.ObjectId(id)},json, function (err, result) {
                if(!err){
                    res.redirect('/admin/focus');
                }
            })






    })




})

router.get('/doDd',function(req,res){
    var id=req.query.id;
    DB.delete('focus',{"_id":new DB.ObjectId(id)},function(err,result){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/focus');
    })
})
module.exports=router;