## 性能优化 跟安全
- http://www.baidu.com  发送什么?
  全栈启用https
  状态码 ?
  304
  301   永久性跳转
  302   临时性的跳转
    GET
    POST -> 降级为GET
  307   临时性跳转
    api  POST ->  GET

- 点击一个a 标签   不跳转怎么做
 prevent  除了这个呢 status  code

 - 1xx 状态码 
    目前正常  客户端可以继续发送请求或者忽略这个响应
    101  Switching Protocol
    Http 升级为websocket  时使用
- 2xx 
    204 没有返回
    205 不返回内容 但是要求刷新视图  ，表单不要多次提交，规避了
    206  应用场景  大文件上传，
- 3xx
    301 永久跳转  http -> https  域名废弃了，老用户从老域名出来
    302 临时跳转
    304 NOT Modified 
     If-Modified-Since



- js优化文码可以做什么？
  - eval with 都不要用
  eval  可以把任何的js 文本运行起来，黑科技
  特别消耗性能
  安全问题
  cookie 可能有用户身份信息 。eval js  cookie ajax 发给自己的服务器jspon
  拿到用户的cookie 
  解决方案是什么？
   - cookie  httpOnly 可以为网站的核心cookie加一个HttpOnly属性
   - 用户输入   前后端转义，encodeURIComponent 

   - 加载的 顺序
    css head  尽快看到页面
    为什么js文件会阻塞  
    js 动态的代码   动态操作DOM  下载执行完毕
    下载  ，放在body 尾部 阻塞

    css  雪碧图  ，现在还有必要吗？ http 请求少 ，缺点是，第一次下载有点慢
    雪碧图 css  background-postion
    alley  iconfont  为什么不会影响性能  cdn缓存 字体  阿里，部署 cdn 集群  
    背景图  直接img src = "" 增加http请求  没有http请求  ，被webpack 打包成了base64 
    如果有请求 ，http协议更新了 对他的支持