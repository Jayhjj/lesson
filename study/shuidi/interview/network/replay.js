var http = require('http');

http.createServer(function(req,res){
    //一份代码，满足两种需求
    // axios  proxy  /api/posts  前后端分离  mvvm  响应头 text/json
    //传统的后端驱动性开发   html   mysql + 套页面  mvc  text/html
    //后端视角
    //mysql 取出来的
    let posts = [{
        id: '5e8c94a7f265da47a74126d4',
        title: '怎么排查堆内存溢出呀？'
      }, {
        id: '5eb7ebea5188256d723151fb',
        title: '给前端工程师的一张Dart语言入场券'
      }]
    if(req.url === '/post'){//请求的url 请求行
        if(req.headers['content-type'] == 'text/json'){
            // vue/react
            //api很灵活
            res.end(JSON.stringify(posts))
        }else{
            //后端自己建一个站
            let postHtml = posts.map(post =>`
                <li>
                    ${post.id} ${post.title}
                </li>
            `).json('')
            res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
            res.end(`
                <html>
                    <head>
                    <body>
                        <ul>
                        ${postHtml}
                        </ul>
                    </body>
                    </head>
                </html>
            `)
        }
    }
    res.end('hello world');
}).listen(1314);