 //fileSystem 内置模块
 const fs = require('fs');
 const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

 //console.log('hello node');
const image = fs.readFileSync('car.png').toString("base64");
// console.log(image);
const client = new AipImageClassifyClient('17711752',
'IIlLCBQKR7DfG68cVgPGXuhO','B4giEm0PyvWNzt9flXsp4WV69xb41Zin');
client
  .carDetect(image)
  .then(function(result){
      console.log(result);
  })
 //回调函数
 //文件在哪？磁盘里
 //js 在哪里运行？  内存 I/O操作
//  fs.readFile('./text1.txt', function(err,data){
//      if(err){
//          return console.error(err);
//      }
//     console.log(data.toString());
//  })
