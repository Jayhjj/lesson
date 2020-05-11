- 请问 ,web交互的数据格式是什么？ 有没有什么方法 在用户请求时提供多种数据返回格式的选择？
    ajax json   text/html
    动态web  ajax   text/json
    mvc  mvvm  请求头的分析
- 计算机网络这块的知识点，最好是历史课
1. 我什么http createServe  calback  req+res  表达出来呢？
    - 浏览器n和服务器1之间的通信  不是php/node  底层是http协议
    - HTTP 协议构建于TCP/IP协议之上的网络应用层协议
    HTTP/0.9 诞生于1991 为了学术交流,在网络之间传输html超文本内容，采用请求响应模式
    基于TCP安全链接管道
     - HTTP 基于TCP 客户端  IP地址(dns  domain),端口，
        三次握手，建立起连接
        dns 递归的查找过程
        浏览器缓存 -> host 文件 -> 运营商 -> ....-> 美国
        三次握手  建立连接
            双方都有发送和接收数据包的能力  ack  syn 
           1. brower syn(seq + j) SYN_SENT 同步序列号
           2. ack = j+1 发挥给你  发送一个自己的  seq = k
           3. brower establised 状态 ack = k+1
        四次握手  断开连接  1:n
        发送完请求后
        1. A -> TCP 发送完毕了  B  FIN报文
        2. B 接收到  不会立即用FIN  报文回复主机A ,主机A发送一个确认的ACK 同时通知自己相应的应用程序，(防止A多次发送FIN)
        3. TCP向A发送一个FIN报文
        4. A收到FIN报文 ，告诉B 给他一个ACK 表示彻底释放

    - 1.0版本
    1994 支持多文件下载
    text/html 0.9  image/png  text/css  text/js
    accept: text/html
    accept-enconding:gzip
    accept-Charset utf-8
    accept-language: zh_CN
    请求体  POST
    状态码 202 503
    Cache 机制  Last Modify
    userAgent ？有什么用 ？ 判断用户的浏览器类型啊
    在业务开发中，很重要，
    - 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计。 pc/mobile
    iphone/android 手机网站
    - logs日志处理  阿里下单的 30% 的 iphone 用户买了70%的钱

    - 1.1 版本


2. 在那个HTTP版本中支持 png解析
3. 雪碧图 http 请求 ，合并到一张背景图上，前端性能优化技术，为什么现在不考了？ 那个http版本里   
4. userAgent 在那个版本出现
5. 那个版本极大的提升了下载速度