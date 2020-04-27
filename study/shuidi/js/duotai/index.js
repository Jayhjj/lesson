function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 覆盖了object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a Person, my name is ' + this.name;

}

function Man(name, age) {
    console.log(arguments, '-------');
    // Person 构造函数  把父类的构造函数执行一下
    Person.apply(this, arguments);
}

Man.prototype = Object.create(Person.prototype);


//toString 覆盖
Man.prototype.toString = function() {
    return 'I am a 007,my name is ' + this.name;
}

var cxc = new Man("lyf", 21);
console.log(cxc + "");

var person = new Person('JAY', 20);
console.log(person + ""); //类型转化
// const arr = ['JAY', "XQ"];
// console.log(arr + "");
// console.log(Object.prototype.toString.call(arr)); //{}
// [object Array]