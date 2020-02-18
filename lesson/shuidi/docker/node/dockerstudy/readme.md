- Koa 是最流行的  node轻量级框架  
  egg.js 基于koa的二次开发

- koa new -> app -> listen
  /bin/www 
  www文件就是网站项目的启动文件
  http.createServer(app.callback())

- 模板
  views
  koa-views()
  app.use() 启用views中间件
  模板在哪里，使用那种模板引擎 pug

- 路由   分层
  routes/index.js
  koa-routes()
  .get post 
  index.routes()
  app.use()

- logger
  koa-logger  use

- 出错模块

- https://img.bosszhipin.com/beijin/mcs/banner/20171031/84ade9701fd02a77fedb6675600a134f33d208e8d6fc287973c46e5cb5346f06.png?x-oss-process=image/resize,w_100,limit_0
  
  静态资源  服务器端资源
  IP ?
  静态资源
  img.bosszhipin.com
  dns 解析? 网络供应商  列表
  公司会在网络供应商机房里去装一些cdn机器  本地没有？ 去中央服务器里请求一次
  缓存到本地

- koa-static
- 表单提交
  koa-bodyparser
  GET  请求头里  head  url GET url?a=1&b=2
  POST  head url 
  body.length + body

  ## node的发布 
    docker  容器化

    node 项目，写完后， 测试工程师 (环境？)
    让项目在不同机器里面，享用相同的环境跑起来 只要机器装一个docker