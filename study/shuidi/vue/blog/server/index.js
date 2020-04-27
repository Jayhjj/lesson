const express = require('express');
const app = express();
// require('./db/db')(app); //数据库的连接
app.use('/', express.static(__dirname + '/web'))
app.listen('3001', async(req, res) => {
    console.log('http://localhost:3001');
})