# meterial design 来自goole
 
 苹果 UI 受欢迎 拟物设计(乔布斯)

 安卓 (material design)

 特别？

 从css 风格 -> 组件  -> reaat 入门

 波浪的感觉?

 css? 思路
 - material design 的灵魂 ，在对于交互的创新
 波浪感，进度条感
 移动端细节，cursor: pointer 用的是非button 组件 user-select:none;
 stylus 嵌入式 ::after  :active:after

 1. background-image
    背景图片 url 引入方式,在移动时代，渐变也可以生成
    即生成了背景，同时又没有用图片
    10% 白 ，1%的透明 (带来了仙气)，
    transform scale(12) 12 -> 0

- 我们要做一堆的按钮
  为开发准备好基础组件，小程序里用过组件，
  要用到的按钮，这里都会有，warning? 大一些，块一级，
  提供 通用的，变通的，各种常见的要求(70%的业务开发)就叫组件
  自己写一下这个组件，以后用就好了，复用
  css 有些变化(状态，primary circlr block)，如何变化封装进去？

  html 区别
  1. 把它的样式封装进去
  button？ 样式是样式
  组件（组合html,css,js)成为一个组件
  
  - ReactDOM Recact 跟DOM交互的库
  基本语法：
  组件是强大的，定义了一个button组件
  type 文字 block。。。。有通用性的需求
  <Boyfriend/> <Grilfriend/></div>,
  1. REactDOM.render(,doucement.getElementById('root'))
   JSX语法 
   才可以在root 里面显示组件 组件 要编译
  
  2. function Button(){//定义组件好方便
      let{  } = props
    return(
      <div></div>
    )
  }

  3. 只要写一次，以后要用按钮就它了。。。