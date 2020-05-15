- 快速打开页面
 - ssr  服务器端渲染  node  .vue  template  服务器端，   html 直接输出  req  seo
 - ssr不适合多人打开  特别是电商项目 ，不适合 ，会炸  实时编译

    template  从前端提前到后端来编译  后端工作压力  SEO
 - 静态化服务 10086.html
   GET /10086.html  MVC/SSR  商品详情页  数据库查数据  node页面模板<%=%> 输出 SEO JAVA/GO/NODE
   做的更牛逼  10086.html 静态化服务  动态页面
   一个人访问  database.   template  compile -> res之后，把生成的html png/js/css ，缓存起来 ，服务器压力降低了 ，cdn
   个人网站可以全栈静态化，基本不太改变   SEO 喜欢纯html网页

   首页静态化  一定需要
 1. 用户都是从首页进入  ，缓解了服务器压力  中央服务器(动态内容) + cdn(静态内容)
 2. 静态化 ，双十一，天猫会把首页在cdn缓存  过期时间


- https://item.jd.com/10086.html  除了静态化外，这个网页怎么实现动态输出呢？  编译，替换
  - 京东的商品详情页，静态化 
    1. 因为SEO,花大量的钱做网络推广
    2. 服务器优化 商品的基本详情 + 商品介绍(商家在后台通过 markdown 编辑器提供给你) 有静态化需求

    ajax动态加载