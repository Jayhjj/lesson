## babel
parse -> transform -> generate
```js
<div>
    <p></p>
</div>
function foo() {

}
```
我今天很高兴:
词法分析: 分词 '我' '今天' 很 '高兴'
语法分析: 分析， 强调的是 整个语境  上下文
- 解析: code -> AST
    - 词法分析：状态机， 源码解析为一个个 token: start-div  start-p  end-p end-div
    - 语法分析: 父子关系构造出来   html -> dom 树
    - AST

一般的，在源代码的翻译和编译过程中，语法分析器创建出分析树，然后从分析树生成AST。一旦AST被创建出来，在后续的处理过程中，比如语义分析阶段，会添加一些信息。

```js
{
    tag: 'div',
    children: [
        {
            tag: 'p'
        }
    ]
}
```

数字：
```js
var str = "123"
```


