- 用户明显的卡顿 ，假设 浏览器花费了过多的时间处理 动画，导致其他的任务（用户的输入）得到的时间较少，浏览器没有足够的时间处理用户输入

- layout -> paint -> composite：三步 非必经

- 也有情况：不经过 paint 之间跳到 composite

- relayout 重排  repaint 重绘
  bgc, box-shadow, color, 只会触发重排

  width , height，display[none/block]

  bgc, box-shadow, color, 只会触发重绘
width , height，display[none/block]  重排

https://csstriggers.com/

1. 改变 css 属性，尽量不引起layout
2. transform cursor 他们非常优秀 直接到达 composite
3. css 动画的时候尽量考虑 transform

4. 如果元素在一个独立的图层上面，transform cursor 他们非常优秀 直接到达 最后一步composite