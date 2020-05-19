前端 graphql -> 介入 api 开发  取代 restfil
可以由前端来定义接口需求 facebook 开源的
react + graphql 提升接口的质量

mounted  axios 请求的时候  交给graphql
服务器端和数据库联系起来  graphqlQLHTTP /graphql

大公司 ，server API 为各条业务提供api服务的时候
grapgql可以为前端调用同一个后端接口实现对接口的自定义，更好的分配接口的调用
1 -> n

GraphQL
输入一个URL 后发生了什么
1. URL设计 Restful
   一切皆资源  名词 + Http 动词 Restful 可以抽象的达到网站向用户提供一切资源的抽象
   不过，就好像吃花甲一样，前后端的接口虽然有接口文档(swagger  egg.js) 但是后端搞得不干净，吃起来有沙子，把接口的定义权力交给前端就干净多了，GraphQL 由facebook 推出，RestFul 成为了历史 