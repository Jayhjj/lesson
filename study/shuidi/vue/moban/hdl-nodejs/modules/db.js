var express = require('express');
var MongoClientrequire = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;  //处理获取数据库id的问题
var dbURL = require('./config.js').dbURL;


exports.ObjectId = ObjectId;
//链接数据库
function _connect(callback) {
    MongoClientrequire.connect(dbURL,function (err,db) {
        if(err){
            return console.error('数据库连接失败');
        }else{
           callback(db);
        }
    });
}

//数据数量
exports.count = function (collectionName,json,callback) {
    _connect(function (db) {
        db.collection(collectionName).count(json,function (err,result) {
            db.close();
            callback(err,result);
        });

    });
}

//查找数据
exports.find = function (collectionName,json1,json2,json3,callback) {
    if(arguments.length == 3){
        var cb = json2;    //回调函数
        var col = {};       //查询的列
        var limit = 0;      //每页显示的条数
        var skip = 0        //跳过的行数
    }else if(arguments.length ==4){
        var cb = json3;
        var col = json2;
        var limit = 0;
        var skip = 0;
    }else if(arguments.length == 5){
        var cb = callback;
        var col = json2;
        // json3 = {
        //     page:x,
        //     pageSize:x
        // }
        var limit = json3.pageSize || 10;
        var skip = json3.page?(json3.page-1)*limit:0;
    }else{
        console.log('传入参数有误');
        return;
    }

    _connect(function (db) {
        var resulte = db.collection(collectionName).find(json1,col).skip(skip).limit(limit);
        resulte.toArray(function (err,data) {
            db.close();
            cb(err,data);
        });
    });
}


//增加数据
exports.insert = function (collectionName,json,callback) {
    _connect(function (db) {
        db.collection(collectionName).insertOne(json,function (err,result) {
            db.close();
            callback(err,result);
        });
        
    });
}

//更新数据
exports.update = function (collectionName,json1,json2,callback) {
    _connect(function (db) {
        db.collection(collectionName).update(json1,{$set:json2},function (err,result) {
            db.close();
            callback(err,result);
        });

    });
}


//删除数据
exports.delete = function (collectionName,json,callback) {
    _connect(function (db) {
        db.collection(collectionName).deleteOne(json,function (err,result) {
            db.close();
            callback(err,result);
        });
    });
    // _connect(function(db){
    //     db.collection(collectionName).removeOne(json,function(err,result){
    //         db.close();
    //         callback(err,result);
    //     })
    // })
}