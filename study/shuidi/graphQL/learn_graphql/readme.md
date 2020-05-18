## 
- 简历技能点描述  ，从词 -> 话语 (vue + graphql) -> 花语

- 看下这个url 设计的科学吗？文章 posts  查看某一篇文章 /posts/show/1   RESTFUL

因为RESTFUL 它是后端暴露资源的解决方案，多年来一直受到追捧

1. HTTP 动词
    GET/POST/DELETE/PATCH/PUT...
2. 每一个URL代表一种资源  /posts/1
3. 客服端 通过http动词  ，对服务器资源进行操作，实现表现层状态转化


设计一个URL网上汇款  ，从账户1向账户2汇款520元 ，URL
资源是什么？ 发生了什么样的改变

/account/1/transfer/500/2 动词  /posts/show/1
/transaction  交易 -> website 独立模块  HTTP 1.1
post  状态转化  
/transaction HTTP1.1/from=1&to=2&amount=520.00

- 不过。在近几年 ，RESTFUL 被前端新的理念革命了 GraphlQL ,让前端更好的使用及定义数据接口  ，swagger API 文档 ，Apollo 不浪费数据 ，数据格式更加严谨

vuex -> GraphlQL(api) -> mockjs -> server  RESTFUL

GraphQL  