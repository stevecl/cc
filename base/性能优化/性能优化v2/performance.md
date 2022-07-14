## 性能优化
### 一、回到那道**面试题
* 输入
URL: url - 资源定位符
```js
    // http://www.zhaowa.com - http协议
    // 追问： http 与 TCP
    //  1. http - 应用层  < = > TCP - 传输层
    //  2. 关联 http 基于 TCP实现连接 => http请求、发送、断开
        // 优化点：1.0 1.1 2.0
        // => UDP vs TCP
        // => keep-alive - 保持TCP的连续畅通 - 不用反复地建立连接
        // => 2.0多条并发请求复用同一条通路 - 复用通路，无并发限制

    //  3. http - 无状态 < = > TCP - 有状态
        // 优化点：
        // => socket 连接，封装化的TCP。让我们的应用，更加方便地使用调用

    // https://www.zhaowa.com - https协议
    // 追问： http 和 https
    //  1. https = http + SSl(TLS) => 位于TCP协议与各种应用层协议之间
    //  2. 实现原理 - 原理图
    //  3. HTTPS多次连接：导致网络请求加载时间延长；增加开销和功耗
        // 优化：
        // => 合并请求 长连接
        
    // 中间层 整合请求时 - 异常处理


    // file:///C:/Users/class/zhaowa/document 本地文件目录地址，只在本机打开
```

* 域名解析
```js
    // 1. 浏览器缓存中 - 浏览器中会缓存DNS一段时间
    // 2. 系统缓存 - 系统中找缓存 -> HOST
    // 3. 路由器缓存 - 各级路由器缓存域名信息
    // 4. 运营商地方站点的缓存信息 - partner
    // 5. 根域名服务器
        // 优化：
        // => CDN - Content Delivery Network
        // 1. 为同一个主机配置多个IP地址
        // 2. LB - 负载均衡

        // => 缓存 => 各级缓存 => 浏览器区分缓存
```

* web服务器
```js
    // apache、ngnix
    // 1. 接收请求 => 传递给服务端代码
    // 2. 通过反向代理 => 传递给其他服务器
    // 3. 不同域名 => 指向相同ip的服务器 => ngnix域名解析 => 引导到不同的服务监听端口
```

### 服务 涉及到 网络优化
* 手写并发 - QPS 
```js
    // 面试：并发优化 10个请求，由于后台或者业务需求只能同时执行三个
    // 分析：
    // 输入：promise数组、limit参数
    // 存储：reqpool - 并发池
    // 思路：塞入 + 执行
    function qpsLimit(requestPipe, limitMax = 3) {
        let reqPool = []
        let reqMap = new Map()

        // 往并发池里塞入promise
        const add = () => {
            let _req = requestPipe.shift()

            reqPool.push(_req)
        }
    
        // 执行实际请求
        const run = () => {
            if(requestPipe.length === 0) return
            // 池子满了发车后，直接race
            let _finish = Promise.race(reqPool)

            _finish.then(res => {
                // 做一个id整理
                let _done = reqPool.indexOf(_finish)
                reqPool.splice(_done, 1)
                add()
            })
            run()
        }

        while(reqPool.length < limitMax) {
            add()
        }
        run()
    }
```

### 浏览器渲染时
* 浏览器执行顺序
主线：HTML => DOM + CSSOM => renderTree + js => layout => paint
支线：
repaint - 改变文本、颜色等 展示
reflow - 元素几何尺寸变了

=> 优化点：减少repaint，避免reflow
=> display: none => reflow; visibility:hidden; => repaint

### 脚本执行时 - JS
mark & sweep => 触达标记，锁定清空、未触达直接抹掉
```js
    // 内存分配：申明变量、函数、对象
    // 内存使用：读写内存
    // 内存释放

    const zhaowa = {
        js: {
            performance: 'good',
            teacher: '云隐'
        }
    }

    // 建立引用关系
    const _obj = zhaowa

    // 引用源给替换掉了 - 暂未gc
    zhaowa = 'best'

    // 深入层级做引用 - 暂未gc
    const _class = _obj.js

    // 引用方替换 - 暂未gc
    _obj = 'over'

    // gc 完成
    _class = null
    
    // => 1. 对象层级，宜平不宜深 2. 深层引用最好深拷贝，或者用完直接销毁 3. 避免循环引用
    function traverseTree(node1, node2) {
        node1.parent = node2;
        node2.children = node1;
    }

    // 内存泄露
    // 莫名其妙的全局变量
    function foo() {
        bar1 = ''
        this.bar2 = ''
    }

    // 未清理的定时器
    setInterval(() => {
    }, 1000)

    // 使用后的闭包
    function zhaowa() {
        const _no = 1
        return {
            number: _no
        }
    }
```

### 打包配置优化
```js
    // 1. 懒加载 - 非必要不加载
    // 2. 按需引入 - 非必要不引入
    // 3. 抽离公共 - 相同项目合并公用
```




