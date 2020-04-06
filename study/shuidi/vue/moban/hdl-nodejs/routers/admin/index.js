var express = require('express');
var router = express.Router();



router.get('/',function (req,res) {
    //res.send('后台首页')
     res.render('admin/index/index');
});

module.exports = router;