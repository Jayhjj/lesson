// 中间件是什么？ middlewares koa express
// 服务是通过middlewares 来提供的
// 洋葱图
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); //中间件服务
// const logger = require('logger');
//向用户响应hello，web 服务
// const sayHelloCN = async(ctx) => {
//     ctx.body = '你好世界';
// }
// const sayHello = async(ctx) => {
//     ctx.body = 'hello,world';
// }

// app.use(sayHello) //启用一个中间件服务
// app.use(sayHelloCN)

//req ,ctx.req  下面的中间件函数就会提供服务
//发送表单处理/req middlewares(bodyparser) 收集用户post
//过来的数据on('data') on('end')
const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next();
}
app.use(logger);
app.use(bodyParser()) //内部的代码  await  .. next
    //加中间件，就像加一个服务
    //logger 设置日志服务 req Data()  req.url  req consle.log
    //响应
app.use(async(ctx) => {
    // context 上下文 ，跳转，报错
    //得到表单传过来的数据
    //res 向发出请求的用户返回他在请求时from 里的数据
    //没有拿到？用户请求数据
    // 表单数据到达，异步的 on('data')
    ctx.body = ctx.request.body //ctx.require  req
})

app.listen(3000);