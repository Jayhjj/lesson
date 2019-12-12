//nb email 正则表达式
// 754211506@qq.com
// 754211506@sina.com.cn
// 一定要匹配到.+  (\.[0-9a-zA-Z_-]+)+
console.log(/^[\w_-]+@[\w_-]+(\.[0-9a-zA-Z_-]+)+$/.test("2762319789@qq.com.cn"));