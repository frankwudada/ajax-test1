let n = 1
getNextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    pageUL.appendChild(li);
                });
                n += 1
            } else {
                console.log("请求失败了")
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(typeof request.response)
                console.log(request.response)
                // 将符合 JSON 语法的 JSON 字符串转换为 JS 数据
                const object = JSON.parse(request.response)
                console.log(typeof object)
                console.log(object)
                // 将 JS 数据转换为 JSON 字符串
                const string = JSON.stringify(object)
                console.log(typeof string)
                console.log(string)
            } else {
                console.log("请求失败了")
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 直接将 XML 放到 dom 里面
                const dom1 = request.responseXML
                console.log(dom1)
                // dom1 是一个 object
                console.log(typeof dom1)
                const text = dom1.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim())
                const dom2 = request.responseText
                console.log(dom2)
                // dom2 是一个 string
                console.log(typeof dom2)
            } else {
                console.log("请求失败了")
            }
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div")
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                console.log("请求失败了")
            }
        }
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.body.appendChild(style)
            } else {
                console.log("请求失败了")
            }
        }
    }
    request.send()
}
getJS.onclick = () => {
    // 创建新对象；readyState = 0
    const request = new XMLHttpRequest()
    // 调用 open，初始化一个请求，确定要使用的 HTTP 方法和路径 URL；；readyState = 1
    request.open("GET", "2.js")
    // 监听 onload；readyState = 3；；readyState = 4
    request.onreadystatechange = () => {
        console.log(request.readyState)
        // 打印响应中的数字状态码
        console.log(request.status)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script")
                script.innerHTML = request.response
                document.head.appendChild(script)
            } else {
                console.log("请求失败了")
            }
        }
    }
    // 调用 send，发送 HTTP 请求；头部状态获得后，readyState = 2
    request.send()
}