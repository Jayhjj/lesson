// 数据库层的分离
module.exports = app => {
    //mongoose 的驱动
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/myblog', {
            useNewUrlParser: true
        }) //搭起数据库

}