// mongodb 驱动
var MongoClient = require('mongodb').MongoClient;
// mogodb 连接是用mongodb://协议来  27017端口
//mysql 3306端口
var url = 'mongodb://192.168.31.128:27017/runoob'
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    // console.log('数据库已创建');
    var dbbase =db.db("runoob");
    // 查询数据库是不是异步？ 回调方案
    // dbbase.createCollection('jay_site',function(err,res){
    //     // 回调先处理错误
    //     if(err){
    //       throw err;
    //     }
    //      console.log('创建了集合');
    //      db.close();
    // })
    // 插入数据
    // JSON object
    // var myObj = {name:'jay',url:'www.runoob'};
    // dbbase
    //   .collection("jay_site")
    //   .insertOne(myObj,function(err,res){
    //       if(err)
    //         throw err;
    //         console.log('文档插入成功');
    //         db.close();
    //   })
    dbbase.collection("jay_site")
      .find({"name":"潘志伟"})
      .toArray(function(err,result){
           if(err)
             throw err;
             console.log(result);
             db.close();
      })
    
})