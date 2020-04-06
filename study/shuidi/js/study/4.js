// 内置对象  
// 研究  MDN
// console.log(Math.max());
// //Math 属性对象 不是一个构造函数，使用不需要new 来调用
// //而是直接使用里面的属性和方法
// console.log(Math.PI);

// var myMath = {
//     PI: 3.1415934,
//     max: function() {
//         var max = arguments[0];
//         for (var i = 1; i < arguments.length; i++) {
//             if (arguments[i] > max) {
//                 max = arguments[i];
//             }
//         }
//         return max;
//     }
// }

// console.log(myMath.PI);
// console.log(myMath.max(1, 2, 3));

console.log(Math.random());

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(getRandom(1, 10));
var arr = ['sd', 'sa', 'jay'];
console.log(arr[getRandom(0, arr.length - 1)]);