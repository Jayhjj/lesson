var express = require('express');
var router = express.Router();



router.get('/',function (req,res) {
    res.send('前端首页')
});

module.exports = router;