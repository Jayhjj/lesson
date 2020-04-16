# 除了js webpack 打包一切静态资源，由loader负责
css stylus png  fonts  postcss
不一定调得出来
webpack loader 手写

# webpack  为 web 应用工作
- 入口核心文件 .js文件
dev阶段 webpack 是把工作放在内存中
express 
1. css-loader  stylus-loader 的区别？
   js引入css 
   webpack 建立依赖关系的过程
   import  require  path  extension
   package.json 分析 ，报错

2. use 带来了定制性  webpack不是用来学的，是用来用的,
用来修的，webpack 考点多半出自你是否会修
loader 
js 处理css 
web 应用而来  style  行内样式<style></style>
css文件 引入的用法<link>

css-loader 为css后缀解析 ，以及css内的@import 外部资源做工作
style-loader 把样式插入到DOM中

pic有web应用的需要 ，  webpack为之奋斗
base64何时启动 减少了请求的数量
js 体积暴增   上限