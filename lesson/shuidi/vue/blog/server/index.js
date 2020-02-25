const express = require('express');
const app = express();
require('./db/db')(app);//数据库的连接