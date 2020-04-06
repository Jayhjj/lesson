//const phoneReg = /^1[35789]\d{9}$/;//匹配规则定义  正则表达式
const phoneReg = /\^d{3}-\d{5,8}$/;
console.log( phoneReg.test('010-123456')) ;
console.log(typeof phoneReg);


