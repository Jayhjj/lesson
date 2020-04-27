// webpack 怎么在js文件里处理css文件
const css = require('css-loader!./index.css'); //{}
//并不是不可以引入js的 css 是属性节点   css文本  js文本
// dom node 节点 tree,在使用css {width:h,color:red}，js可以把css当成一个json来用
//css in js
//图片以二进制的形式来引入

const a = 100;
// console.log(a);
console.log(a, css);