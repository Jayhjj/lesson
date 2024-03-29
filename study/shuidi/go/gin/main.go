package main  //module

// import "fmt"
// gin 第三方模块github.com    npm  
import (
	"github.com/gin-gonic/gin"
	"net/http" // http模块 node 也有
)
// 代码里绝不会有垃圾

func main() { //入口
	// map hashmap 数据结构 es6 map set 
	// js es5 json object
	// go 现代c语言
	// var countryCapitalMap map[string]string //变量声明 没有分配空间 
	// countryCapitalMap = make(map[string]string) // make alloc 内存空间
	// countryCapitalMap["France"] = "巴黎" 
	// countryCapitalMap["Italy"] = "罗马"
	// countryCapitalMap["Japan"] = "东京"
	// countryCapitalMap["India"] = "新德里"

	// 遍历
	// arr  索引
	// map json  键 没有顺序[{}]
	// 区间 10  [0-10] for(var i =0; i < 10; i++) 
	// for country := range countryCapitalMap { //数组
	// 	fmt.Println(country, "首都是", countryCapitalMap[country])
	// }
	// go gin web 引擎
	engine := gin.Default() //  const app = express() 
	engine.GET("/", func(context *gin.Context) { 
		//context koa ctx  express req + res 
		// res.send()
		// int -> ? 
		// http.StatusOK 200 代码可读性
		context.String(http.StatusOK, "hello gin get method")
	 // node listen  8080 
	})
	// resetful  使用相对应的语义的请求动词 + url语义化    /login  POST
	// /post/1234  GET 读某篇文章
	// /post POST 新增一篇文章
	// /post  GET 获取文章列表 

	engine.POST("/", func(context *gin.Context) {
		//保存数据 加 
		// {username: 'ysw', hobbies: ['直播']} 
		// {username: 'meimei', hobbies: ['花钱']} 
		context.String(http.StatusOK, "hello gin post method")
	})
	// PUT 动词是干什么的 ？ POST 修改 整个的替换
	// 拆
	// {username: 'ysw', hobbies: ['喝酒', '特斯拉']}  
	engine.PUT("/", func(context *gin.Context) {
		//保存数据
		context.String(http.StatusOK, "hello gin put method")
	})
	// /post/123 GET DELETE 删除这篇
	engine.DELETE("/", func(context *gin.Context) {
		//保存数据
		context.String(http.StatusOK, "hello gin delete method")
	})
	// PATCH 更新局部
	// node router
	engine.PATCH("/", func(context *gin.Context) {
		//保存数据
		context.String(http.StatusOK, "hello gin patch method")
	})
	// http 请求头
	// 不在意返回内容 response 响应头
	// 在不获取资源的情况下， 了解资源的信息
	// 有没有改过？ 文件大小 文件存在吗？
	engine.HEAD("/", func(context *gin.Context) {
		//保存数据
		context.String(http.StatusOK, "hello gin head method")
	})
	// 选项 
	// 测试一个url 支持的所有方法
	engine.OPTIONS("/", func(context *gin.Context) {
		//保存数据
		context.String(http.StatusOK, "hello gin options method")
	})

	// _ 我不处理
	_ = engine.Run(":3000")
}
