## 浏览器体系
### 一、 认识在浏览器运行态下的JS
#### 包含：BOM、DOM、ECMAScript
```js
    (function(context, undefined){
        const _class = ['js', 'browser', 'vue']

        // 向全局中挂载
        window.classArr = _class.map(item => item)

        // 获取当前页面地址
        const _url = location.href

        // 设置tab标题
        document.title = 'zhaowa class'

        // 获取渲染节点
        document.getElementById('app')
    })(this)

    // 追问：了解浏览器JS的执行态
    // 简述：
    // ECMAScript - 基础逻辑、数据处理
    // DOM - 对于浏览器视窗内，文本的相应操作
    // BOM - 对于浏览器本身区域能力的处理
```

### 二、BOM
#### 1. location
location.href => 'https://www.zhaowa.com/search?class=browser#comments' => 路径栏所有
        .orgin => 'https://www.zhaowa.com'
        .protocol => 'https:'
        .host => 'www.zhaowa.com'
        .port => ''
        .pathname => '/search/'
        .search => '?class=browser&id=2'
        .hash => '#comments'

        .assign('') // 跳转到指定path => 替换pathname
        .replace('') // 同上，同时替换浏览历史
        .reload()
        .toString() // 产出当前地址字符串

* 面试方向：
1. location本身api操作 - 提取相关信息、api间对比 => assign vs replace
2. 路由相关: 跳转、参数、操作 => 场景：可返回（history）、是否刷新（hash）=> replace替换assign、携带参数
3. url处理 - 正则 or 手写js处理
4. URI & URL: uniform resource identifier / locator

#### history
history.state => 存储当前页面的状态

history.pushState() 
        .replaceState()

* 面试方向 - 路由方向 history和hash的模式利弊

#### 3. navigator
* 浏览器系统信息大集合
```js
    navigator.userAgent // 获取当前用户的环境信息
```
* 面试方向
1. userAgent 读取信息 => 浏览器兼容性、上报信息
2. 剪切板、键盘

#### 4. screen
表征显示区域 - 荧幕

* 面试方向 - 判断区域大小
    window 视窗判断：
        全局入口处：
            window.innerHeight
            window.innerWidth
        文本处获取：
            document.documentElement.clientHeight
            document.documentElement.clientWidth
            document.body.clientWidth
            document.body.clientWidth

    网页视图的size -> offsetHeight = clientHeight + 滚动条 + 边框
        document.documentElement.offsetHeight
        document.documentElement.offsetWidth
        document.body.offsetHeight
        document.body.offsetWidth

    动态定位：
        scrollLeft / scrollTop - 距离常规左 / 上滚动距离
        offsetLeft / offsetTop - 距离常规左 / 上距离

    el.getBoundingClientRect()
        el.getBoundingClientRect().top
        el.getBoundingClientRect().left
        el.getBoundingClientRect().bottom
        el.getBoundingClientRect().right
    * 兼容性 - IE是会多出来2像素

    ### 三、 Event事件模型
    ```js
        <div id="app">
            <p id="dom"></p>
        </div>

        // 冒泡 - ms: p => div => body => HTML => document
        // 捕获 - ns: document => HTML => body => div => p

        el.addEventListener(event, function, useCapture) // 默认值false

        // 追问：
        // 1. 如何阻止时间的传播
        event.stopPropgation() 
        // 注意：阻止传递行为 => 无法阻止默认事件

        // 2. 阻止默认事件 - a  
        event.preventDefault()

        // 3. 相同节点绑定多个同类事件
        event.stopImmediatePropagation()

        // 引申型面试核心： 兼容性 & 性能
        // 4. 手写兼容性事件绑定
        // IE - attachEvent vs addEventListener
        // 区别：
        // a. 传参：attachEvent 对于事件名需要加上'on'
        // b. 执行顺序：attachEvent - 后绑定先执行； addEventListener - 先绑定先执行
        // c. 解绑：detachEvent vs removeEventListener
        // d. 阻断：event.cancelBubble = true vs event.stopPropgation() 
        // e. 默认事件拦截：event.returnValue = false vs event.preventDefault()

        class bindEvent {
            constructor(element) {
                this.element = element;
            }
            // 绑定
            addEventListener = (type, handler) => {
                if(this.element.addEventListener) {
                    this.element.addEventListener(type, handler, false)
                } else if(this.element.attachEvent) {
                    this.element.attachEvent('on' + type, () => {
                        handler.call(element);
                    })
                } else {
                    this.element['on' + type] = handler;
                }
            }
            // 解绑
            removeEventListener = (type, handler) => {
                if(this.element.removeEventListener) {
                    this.element.removeEventListener(type, handler, false)
                } else if(this.element.detachEvent) {
                    this.element.detachEvent('on' + type, () => {
                        handler.call(element);
                    })
                } else {
                    this.element['on' + type] = null;
                }
            }
            // 阻断
            static stopPropgation(e) {
                if (e.stopPropagation) {
                    e.stopPropagation()
                } else {
                    e.cancelBubble = true;
                }
            }
            // 默认拦截
            static preventDefault(e) {
                if(e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnValue = false;
                }
            }
        }

    // 5.性能优化 - 事件代理
        <ul class="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul> 
        <div class="content"></div>

        var list = document.querySelector('list');
        var li = list.getElementsByTagName('li');

        // 硬碰硬
        for(var n = 0; n < li.length; n++) {
            li[n].addEventListener('click', function() {
                // 业务逻辑
            })
        }

        // 代理后 - 利用事件传递
        function onClick(e) {
            var e = e || window.event;

            if(e.target.nodeName.toLowCase() === 'li') {
                // 业务逻辑
                var liList = this.querySelectorAll('li');
                // ……
            }
        }

        list.addEventListener('click', onClick, false)
    ```

    ### 四、网络层
    ```js
        // 实例化
        const xhr = new XMLHttpRequest();

        //初始化建立
        xhr.open(method, url, async) // get/post; 请求的地址; 是否为异步请求

        // 方法的发送请求 - send
        xhr.send(data) // get - 可以不传或传入null，post - encodeURIComponent编码拼接

        // 接收
        // xhr.readyStatus - 0 - 尚未建立open；1 - 已经调用open； 2 - 已经调用send； 3 - 已经收到请求返回； 4- 请求已经完成
        xhr.onreadystatuschange = () => {
            if(xhr.readyStatus === 4) {
                // 判断http状态码
                if（xhr.status >= 200 &&
                    xhr.status < 300 ||
                    xhr.status == 304) {
                        // xhr.responseText
                }
            }
        }

        // 超时时间
        xhr.timeout = 30000
        xhr.ontimeout = () => {
            // 超时后
        }

        // 面试方向
        // 1、TCP => HTTP/HTTPs
        // 2、状态码 => 2xx 4xx 5xx | 3xx => 浏览器缓存 => 强缓存（Expires + cache-control） / 协商缓存(last-modified + Etag)

        // 封装手写
        ajax({
            url: 'reqUrl',
            method: 'get',
            async: true,
            timeout: 30000,
            data: {
                payload: 'text'
            }
        }).then(
            res => {}
            err => {}
        ).catch(err => {})

        // 实现：
        function ajax(options) {
            const {
                url,
                method,
                async,
                data,
                timeout
            } = options;

            const xhr = new XMLHttpRequest()

            //  配置超时事件
            if (timeout) {
                xhr.timeout = timeout;
            }

            return new Promise((resolve, reject) => {
                // 成功
                xhr.onreadystatuschange = () => {
                    if(xhr.readyStatus === 4) {
                        // 判断http状态码
                        if（xhr.status >= 200 &&
                            xhr.status < 300 ||
                            xhr.status == 304) {
                                // 返回拦截器
                                resolve(xhr.responseText)
                        } else {
                            reject()
                        }
                    }
                }

                // 失败
                xhr.onerror = err => reject(err)
                xhr.ontimeout = () => reject('timeout')

                // 传参处理
                let _params = []
                let encodeData = ''
                if (data instanceof Object) {
                    for(let key in data) {
                        // 参数编码
                        _params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    }
                    encodeData = _params.join('&')
                }

                // method判断连接
                if (method === 'get') {
                    const index = url.indexOf('?')

                    if(index === -1) {
                        url += '?'
                    } else if(index !== url.length -1) {
                        url += '&'
                    }

                    url += encodeData
                }

                // 建立连接
                xhr.open(method, url, async)
                // 请求拦截器……
                // 发送请求
                if (method === 'get') {
                    xhr.send(null)
                } else {
                    // post
                    xhr.setRequestHeader(
                        'content-type': 'application/x-www-form-urlencoded'
                    )
                    xhr.send(encodeData)
                }
            })
        }
        // 面试点： content-type => 内容类型 => 浏览器 => ff chrome
    ```
### 五、浏览器原理
面试题： 从url输入到页面展示发生了什么 - 获取到资源 => 渲染出页面
```js
    // DOM
    // CSSOM - CSS解析成树形数据结构
    // Render Tree: DOM + CSSOM生成树
    // Layout module：计算Render Tree每个节点具体的状态和位置
    // Painting：呈现到屏幕上

    // 流程
    // Url => HTML解析 - JS + DOM + CSSOM => render tree / JS + css执行  => layout => painting

    // 纵向切分
    // bytes(62 48 65 2C……) => characters(<html></html>) => Tokens(tag tree) => Nodes(html|head|body) => DOM | CSSOM

    // 面试方向
    // 1. 渲染流程
    // 2. 解析方式 => 引擎书写（DSL）
    // 3. ** 性能优化
```

