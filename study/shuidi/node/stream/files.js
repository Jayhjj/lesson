const fs = require('fs');
//大文件
fs.readFile('./readme.md',(err,info) =>{
    fs.writeFile('./readme-copy.md',info,(err,info)=>{
        if(!err){
            console.log('copy success')
        }
    })
})
const readStream = fs.createReadStream('./readme.md') ;
const writeStream = fs.createWriteStream('./readme-copy.md');
readStream.pipe(writeStream);
//node 内存管理
//服务端