1. element-ui 源码在哪里?
2. github element-ui 
   怎么做？ 学，边看代码边实现一下

3. 写出来element-ui 组件
   css文件引入留下，将vue.use(ElementUI)注释
   
- 学到代码风格
  属性一行一个 有利于代码可读性

- :class 的用法 [] 有多个动态样式要输出 
   computed 属性  根据props 再计算
   6000 人民币(props,data)

- props 高级声明
    type:{//props name
        type:String,//类型
        default:'默认值',
        validate:function(){} return boolean
    }
    ['type','title']//粗线条系的

1. 怎么使用Element-ui
import ElementUI from 'element-ui
Vue.use(ElenentUI)
所有的组件就全局使用
 - Vue.use 背后在干什么
 - 如果我只想使用部分组件，而不是所有 怎么解决？
 js 越少越好，项目中用不到所有组件。只使用部分，怎么实现？ 项目越快 

 - 每个组件都是一个目录
 carousel 组件 设计成了一个父子组件 各司其职 拆分的足够细 

 carousel-item 
 划分职责
 容器组件， 横向|竖向 