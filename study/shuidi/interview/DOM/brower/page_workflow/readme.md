虚拟DOM(Vue 和 React 核心，提升页面性能) + 算法TREE(二叉树，二叉搜索树，平衡树，红黑树...)  重绘  浏览器工作原理 = 顶级公司就业(相遇,DOM树)
如果下载CSS 文件阻塞了，会阻塞DOM树的合成吗？

不会阻塞DOM树的合成，会阻塞页面的显示 
不同阶段
webpack   从url -> 发出一个http请求，download html document -> 解析出来的页面(看到的) 分成阶段
webpack 工作流，不同的阶段-> 打包输出dist.js 
网页的显示也一样

1. DOM树的合成    
2. 页面显示，重绘 ，重排  (css处理有关)
浏览器把页面展示(绘制)出来 ，有工作流程
- 入口是什么？
    绘制页面入口，入口是html文件index.html,网络子进程 Buffer
    resolve:['.html','.js','.css']
    html 超文本标记语言 <p>渲染流程</p> 
    dom  标签结点(document,createElement),文档节点
    (doucment.createTextNode)
    css 层叠样式  stylesheet  p{color:red}
    js javascript   p.style.color = "gary"
    document  文档开始  ，空白的  ，DOM树没形成 ，渲染树更没有，布局样式没有，js event loop 没有

    webpack  rules  ,渲染通过最初的html文档内容，进行分别处理
    为什么有标签就可以？

- 不同类型的文件，不同的loader，
    每个阶段
    类比：
    webpack
    - 开始每个子阶段有输入的内容  .style   .css    .png  .ts
    - 对其进行相应处理  loader
    - 每个阶段生成输出内容  bundel.js

    上一个阶段输出，会成为下一个阶段的输入  bundle.js

- 输出是什么？

1. 构建DOM树，在内存中
   浏览器没办法理解HTML 格式，
   编程过程， 数据结构 + 算法(css selector, js querySelector  查找效率 ，什么树来解决？二叉搜索树 BST)

2. 添加css属性 样式的计算(Recalculate Style)
    这么多样式要怎么管理起来？ 样式表
    选择器，权重， 层叠的概念
    当浏览引擎接收到css文本时, text/css
    doucment.stylesheets  对象中  json 组织 css 规则的
    选择器就是key  value 就是属性值
    ele.style.color
    再进行样式的计算 
    - 转换样式表中的属性，使其标准化
        body{font-size:2em} em css3    px
        font-weight:bold  600
    - 计算每个节点的具体样式    
        1. 继承
        2. 层叠
        3. 浏览器默认样式，及其结点样式
3. 计算每个DOM节点的大小  绘制的过程,  布局
    需要计算出DOM 树中可见元素的几何位置，这个过程叫做布局
    第二棵树？ 渲染树()
    1. 遍历DOM树的所有结点，并把这些结点加到布局树里面去
    2. 布局的计算
    什么叫做双飞翼布局  
开始绘制 


- 双飞翼和圣杯布局  ，常考考点
- 三列式布局，圣杯优缺点，当宽度小于left时候，会掉下来
  双飞翼 解决了这个bug  缺点也有？ DOM 树更复杂，渲染性能不如圣杯