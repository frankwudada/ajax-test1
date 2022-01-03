var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]


if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}


var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method


    /******** 从这里开始看，上面不要看 ************/


    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
    console.log("method:")
    console.log(method) // GET 或者 POST
    if (path === '/index.html') {  // path：文件或者目录路径
        response.statusCode = 299   // 改变请求行路径加查询参数
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.setHeader("Frank", "XXXX")  // 设置响应体的格式
        let string = fs.readFileSync('public/index.html').toString()
        const page1 = fs.readFileSync("page/page1.json").toString()
        const array = JSON.parse(page1)
        const result = array.map(item => `<li>${item.id}</li>`).join("")  // 使用 join() 删除空格和将数组转化为字符串
        string = string.replace("${page}",`<ul id="pageUL">${result}</ul>`)  // 模板字符串必须用反引号
        response.write(string);
        response.end()
    } else if (path === '/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/main.js'))
        response.end()

    } else if (path === "/style.css") {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync('public/style.css'))
        response.end()
    } else if (path === "/2.js") {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/2.js'))
        response.end()
    }else if(path==="/3.html"){
        response.statusCode=200
        response.setHeader("Content-Type","text/html;charset=utf-8")
        // 同步读取（sync：同步；async：异步）
        response.write(fs.readFileSync("public/3.html"))
        response.end()
    } else if(path==="/4.xml"){
        response.statusCode=200
        response.setHeader("Content-Type","text/xml;charset=utf-8")
        response.write(fs.readFileSync("public/4.xml"))
        response.end()
    }else if(path==="/5.json"){
        response.statusCode=200
        response.setHeader("Content-Type","text/json;charset=utf-8")
        response.write(fs.readFileSync("public/5.json"))
        response.end()
    } else if(path==="/page2.json"){
        response.statusCode=200
        response.setHeader("Content-Type","text/json;charset=utf-8")
        response.write(fs.readFileSync("page/page2.json"))
        response.end()
    } else if(path==="/page3.json"){
        response.statusCode=200
        response.setHeader("Content-Type","text/json;charset=utf-8")
        response.write(fs.readFileSync("page/page3.json"))
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }


    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)