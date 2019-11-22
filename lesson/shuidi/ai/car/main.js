const fs = require('fs');
const image = fs.readFileSync('2.jpg').toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client = new AipOcrClient('17712420','07oWHVKvfGSPGbWanb2sjD7N','6DGczseWiioEl5NYHnBnDnjl7euZF3f5');
const options = {};
options["multi_detect"] = "true";

client.licensePlate(image,options)
  .then(function(result){
      console.log(result);
  })