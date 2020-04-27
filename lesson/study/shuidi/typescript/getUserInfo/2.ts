const getUserInfo = function(user:{name:string,age:number}){
    return `name: ${user.name}, age: ${user.age}`
}
//js不会做运行的检测，动态语言 java ts 静态语言
//先编译再运行 ts  检测语法，
//多人协作时 不严格的语法，会带来大麻烦

//中间过程中可能发生意料不到的问题，数据从数据库里取得
console.log(getUserInfo({name:"jay",age:20}));