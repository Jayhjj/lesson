// var obj = {
//         uname: '张三丰',
//         age: 18,
//         sex: '男',
//         sayhai: function() {
//             console.log('hi');
//         }
//     }
//里面的属性或者方法我们采取键值对的形式  键 属性名 ：值 属性值
// 多个属性或者方法中间用逗号隔开
//方法冒号后面跟的是一个匿名函数

//使用对象
//调用对象属性，我们采取 对象名.属性  . 我们理解为 的
// console.log(obj.uname);
// //调用属性还有一种方法 对象名['属性名]
// console.log(obj['age']);
// // 调用对象的方法 sayhi  对象名.方法名  千万别忘记添加小括号
// obj.sayhai();



// 变量和属性的相同的  他们都是用来存储数据的
// var num = 100;
// var obj1 = {
//         age: 28
//     }
//变量 单独声明并赋值 使用的时候直接写变量名  单独存在
//属性 在对象里面不需要声明 使用的时候必须是 对象.属性
// 2.函数和方法发相同点 都是实现某种功能 做某件事
//函数是单独声明  并且调用的 函数名()单独存在
// 方法 在对象里面 ，调用的时候 对象.方法()


//利用new object 创建对象
// var obj = new Object(); //创建了一个空的对象
// obj.uname = 'jay';
// obj.age = 18;
// obj.sex = '男';
// obj.sayhai1 = function() {
//         console.log('hello');
//     }
//     //我们是利用等号 = 赋值 的方法 添加对象的属性和方法
//     // 每个属性和方法之间 用分号结束
// console.log(obj.uname);
// obj.sayhai1();


// 构造函数能够新建多个对象
// 利用构造函数创建对象
// 可以利用函数的方法 重复之下相同的代码 我们就把这个函数称为构造函数
// 里面封装的是对像
// 构造函数 就是把我们对象里面一下相同的属性和方法抽象出来封装到函数里面
// 我们需要创建四大天王的对象  相同的属性 名字 年龄 性别 相同方法 唱歌
// 构造函数的语法格式
// function 构造函数() {
//     this.属性 = 值;
//     this.方法 = function() {}
// }
// new 构造函数名();


// new 构造函数 可以在内存中创建了一个空的对象    new和构造函数确认了眼神 ，生了一个宝宝
// this 就会指向刚才创建的空的对象    
// 执行构造函数里面的代码 给这个空对象添加属性和方法
// 返回这个对象


// function Star(uname, age, sex) {
//     this.name = uname;
//     this.age = age;
//     this.sex = sex;
//     this.sing = function(sang) {
//         console.log(sang);
//     }
// }
// var ldh = new Star('刘德华', 48, '男'); //调用函数返回的是一个对象
// console.log(typeof ldh);
// console.log(ldh.name);
// ldh.sing('冰雨');


//1.构造函数名字首字母要大写
// 2.我们构造函数不需要return 就可以返回结果
//3.我们调用构造函数 必须使用new
//4.我们只要new Star() 调用函数就创建了一个对象 ldh{}
//5.我们是的属性好方法前面必须添加 this

// 我们利用构造函数和创建对象的过程也叫做对象的实例化

var obj = {
    uname: '张三丰',
    age: 18,
    sex: '男',
    // sayhai: function() {
    //     console.log('hi');
    // }
}

// for (变量 in 对象) {

// }
for (var k in obj) {
    //console.log(k); //K 变量 输出 得到的是 属性名
    console.log(obj[k]);
}
// 我们使用for in 里面的宾利 我们喜欢写 k 或者 key