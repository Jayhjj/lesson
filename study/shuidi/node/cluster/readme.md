- WEB 跟桌面 (单机) 最大区别？

 localhost:1234   n个人都可以输入   但是有上限
 并发请求 
 分配给每个用户一个线程，fs 读取一个文件  index.html  
 I/O 吃紧  300左右并发请求  物理
 ？ 解决？  多加机器   物理设备可以并联
 ngnix(负载均衡) 分析哪些机器是空闲的，把用户送到这台机器的IP地址  所以费钱

 如何充分的发挥，每台机器性能？   每台机器要有多核，  
 1234  -> node进程, -> 只是一个进程， -> 一个CPU
 把CPU都用上，