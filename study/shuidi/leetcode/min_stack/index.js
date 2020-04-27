const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列，栈
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('阿珂');
console.log(arr);
// 先进后出
arr.unshift('苏荃');
console.log(arr);
const sq =arr.shift();
arr.push(sq);
console.log(arr);
