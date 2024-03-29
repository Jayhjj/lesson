let htmlStr = `<html>
 <head>
   <style>
   body div #myid {
    width: 100px;
    background-color: #fff; 
  }
   </style>
 </head>
 <body>
    <div>
      123
      <div id="myid">
        <span class="text" ></span>
      </div>
    </div>
 </body>
</html>
`;
// 词法分析：
// 分词
// DOM树 节点有 类型
// { type: element, tagName: 'html', tag: 'startTag'}
// { type: element, tagName: 'html', tag: 'endTag'}
// 语法分析：html 配对， js 编程语言（LL, LR）  // 栈来完成
// 
// startTag push
// end  栈顶元素 [ length -  1] 和 自己标签名一样 配对 ? pop
// CSS 树
// 
let currentToken = null;
let currentTextNode = null;
let currentAttribuate = null;
let stack = [
  { type: 'document', children: [] }
]
function parse(string) {
  let state = start;
  for (let c of string) {
    // \n
    state = state(c);
  }
}
parse(htmlStr);
function start(c) {
  if (c === '<') {
    return tagOpen;
  } else {
    // 只有在 emit 方便拿到该文本节点的 parent 
    // 在 emit top 元素 就是 parent
    // top.children
    emit({
      type: 'text',
      content: c
    })
    return start;
  }
}
function tagOpen(c) {
  if (c === '/') {
    // </h 结束标签
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    // <h  开始标签 去拼接 
    currentToken = {
      type: 'element',
      tag: 'startTag',
      attributes: [],
      tagName: c
    }
    return tagName;
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    // 
    return tagName;
    // 什么时候拼接完？？
  } else if (c === '>') {
    // 提交 当前 token
    emit(currentToken);
    return start;
    // 之前：<div></div>
    // 现在的：<div           id="myid"></div>
  } else if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribuate
  }
}
// <div        id="myid">
function beforeAttribuate(c) {
  if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribuate
  } else if(c.match(/^[a-zA-Z]$/)) {
    currentAttribuate = {
      name: c,
      value: ''
    }
    return attribuateName;
  } else if (c === '>') {
    emit(currentToken);
    return start;
  }
}
function attribuateName(c) {
  if(c.match(/^[a-zA-Z]$/)) {
    currentAttribuate.name += c;
    return attribuateName;
  } else if (c === '=') {
    return attribuateValue
  }
}
// >
// attribuateValue('>')
function attribuateValue(c) {
  if (c === '\"' || c === '\"') {
    // "" ,不做任何处理，自身调用自己处理掉
    return attribuateValue;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentAttribuate.value += c;
    return attribuateValue;
  } else {
    // c 丢了
    // <div id="myid"></div>
    currentToken.attributes.push(currentAttribuate);
    currentAttribuate = null;
    return beforeAttribuate(c);//遇到> 直接交给beforeAttribute处理
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'element',
      tag: 'endTag',
      tagName: c
    }
    // 也要拼接
    return tagName;
  }
}

console.log(JSON.stringify(stack, null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.tag === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    // 当前 element 一定是栈顶的 子元素
    top.children.push(element);
    stack.push(element);
    currentTextNode = null;
  } else if (token.tag === 'endTag') {
    if (top.tagName === token.tagName) {
      stack.pop();
      currentTextNode = null;
    } else {
      throw new Error('no match');
    }
  } else if (token.type === 'text') {
    if (currentTextNode === null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode);
    }
    currentTextNode.content += token.content;
  }
}
