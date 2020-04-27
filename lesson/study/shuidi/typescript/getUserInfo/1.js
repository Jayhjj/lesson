const getUserinfo = function(user){
    return `name: ${user.name}, age: ${user.age}`
}
//js不会做运行的检测，动态语言 java ts 静态语言
//先编译再运行 ts  检测语法，
//多人协作时 不严格的语法，会带来大麻烦
console.log(getUserinfo({name:"jay"}));