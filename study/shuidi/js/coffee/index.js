//1. 构建一个coffee 类
//js 面向对象比较特别
var Coffee = function(){//匿名 值是函数
    console.log('开始给泡制咖啡，请等等');
};
Coffee.prototype.boilWater = function(){
    console.log('烧水，把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用水冲泡咖啡');
}
Coffee.prototype.pourIncup =function(){
    console.log('把咖啡倒进杯子');
}
//在类的原型上添加一个方法
Coffee.prototype.addSugarAndMilk =function(){
    console.log('加糖和牛奶');
}
//抽象 隐去一些细节
Coffee.prototype.makeCoffee = function(){
   this.boilWater();
   this.brewCoffeeGriends();
   this.pourIncup();
   this.addSugarAndMilk();
   console.log('咖啡做好了，请喝吧');
}
var coffee = new Coffee();
coffee.makeCoffee();
// coffee.boilWater();
// coffee.brewCoffeeGriends();
// coffee.pourIncup();
// coffee.addSugarAndMilk();
function Tea(type){//茶类
    this.type = type;
    // console.log('开始给泡茶，请等等');
}
Tea.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Tea.prototype. seepTeaBag = function(){
    console.log('用沸水冲泡茶叶');
}
Tea.prototype.pourIncup =function(){
    console.log('把茶水倒进杯子');
}
//在类的原型上添加一个方法
Tea.prototype.addLemon =function(){
    console.log('加柠檬');
}
//抽象 隐去一些细节
Tea.prototype.makeTea = function(){
    //this指向实例后的对象
   this.boilWater();
   this.seepTeaBag();
   this.pourIncup();
   this.addLemon();
   console.log('茶做好了，请喝吧');
}
const tea = new Tea('大红袍');
tea.makeTea();
console.log(tea.type);