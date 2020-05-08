- Js/CSS 面试基础  ，自己看最重要。
- tree  DOM树/css 渲染树  VNODE 虚拟节点  Virtual
JS 原生    基础能力  内功

- Virtual DOM   babel  AST  抽象语法树  

问题，
<template>
    <div id="root">
        <span class="demo">
            this is a span
        </span>
        <p>DOM</p>
    </div>
</template>
JSON 表达

html->js (tree,json)

{
  tag: 'div',  /*标签*/
  attrs: {   /*标签上的所有属性 封装*/  
    id: 'root'
  },
  children: [ 
    {
      tag: 'span',
      attrs: {
        className: 'demo'
      },
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    },
    {
      tag: 'p',
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    }
  ]
}

