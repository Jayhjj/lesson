1. 前端  不写node
   数据流通问题
  通过 mock  解决

2. 后端  不写vue

前后端分离

座位分开 不超过10次   

orders 表  mongodb  10万条订单数据
migration  100mb

产品经理，订单 做个报表  
table 展示一下 20条  分页 ，5000页
月份，地区  商品  ，进行数据的筛选 

1. 订单数据要展示出来， element-ui 
   el-table  表格  展示
   el-pagination 分页路，

2. 数据在哪里？ node? 不对   使用mock 模拟一下
3. mock 的牛逼在于，未来只要切一个url，就可以上线


- el-table _el-table-column
 数据的展示，数据的可视化 canvas echart
 table rows + cols 
 :data = "list"
  分水岭，会不会做 ，是不是高手

1. table pagination 联动

前后端分离，

模拟真实数据 ，mockjs

我们现在和后端是分离的，界面开发和后端api开发是异步的
不能等接口，一天去后端那几次
node写，新手达不到需求 ，不能上线
mockjs 是业内的解决方案
等到那一天，后端给了你接口 ，只要改一下url，无缝的上线

mock.js 
mock 的造数据魔法AIP |100

@cname 名字 |+1自增 Random

url 提供
可拨插的功能 在后端不给力的时候，插入
给力时，拔掉
前端有了mock 不需要后端在开发阶段支持你

前端Mock 
数据库  mock  本地数据库，