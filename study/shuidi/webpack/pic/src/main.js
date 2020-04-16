import  './styles/main.css';//依赖关系
import './styles/main.stylus';
import './styles/font.css';
console.log('aaaa')//在内存里
let $body = document.querySelector('body')
$body.append(document.createElement('br'))
let $fontTitle = document.createElement('h1')
$fontTitle.innerHTML = 'hello jay'
$body.append($fontTitle)

let $fontWrapper = document.createElement('div')

let $font = document.createElement('i')
$font.className = 'iconfont'
$font.innerHTML = '&#xe609;'

$fontWrapper.append($font)
$body.append($fontWrapper)