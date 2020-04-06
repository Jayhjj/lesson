1. mongodb 更mysql 的本质区别是？
   - NOSQL SQL 数据库三大范式
   - NOSQL doc 允许一定的存储冗余

   user_id name orders 

1. 展示订单 分页 element-ui PC后台  运营部门
   老板  关注 总数  第一季度 单品最佳...

2. 用户来说最多的查询是什么？
   price -> products 推荐 
   围绕orders 表 我的订单  不需要关联user表


orders    设置了一个ordersLines  total  用户便于查询 
- 总销量 
  total -> order  _id
  $sum total 加起来

  filter | linux grep

  第一季度 每个州  销量最多的sku的第一名

 aggregate 应用场景

  - 第一季度  orderDate ISODate() $lt  $gt 2019
  - 每个州   $ state 分组的依据 $group 对 state 分组
  - 销量最多  orderLines.sku $group 分组$sum  orderLines
  - sku 商品唯一的一个号码  第一名orderby 排序,州销量最多的sku

  $match  相当于mongdb的 where 

  有效订单 status:"completed
  state +sku 分组
  每个订单中 
  $unwind 展开orderLines 展开 
