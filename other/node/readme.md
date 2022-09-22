## node 基础
命令式编程

### 一. node 是什么？

Node.js 是⼀个 JS 的服务端运⾏环境，基于 V8，是在 JS 语⾔规范的基础上，封装了⼀些服务端的runtime，让我们能够简单实现⾮常多的业务功能。

Node.js 在2009年（第一版npm被创建）诞生之初是为了实现高性能的 web 服务器，再后来 Node.js 慢慢演化为了一门服务端“语言”。

- commonjs 是一个 规范，nodejs 是 cjs 的实现。

LAMP
- Linux + Apache + MySQL + php; (thinkPhP, CI)
MEAN
- mongoDB + express + angular + node.js   2014年


#### node 能做哪些事情？
npm run start 运行了node.

- 跨平台开发： PC  web  H5  RN  Weex 
- 后端开发： API, RPC 
- 前端开发： 前端工具链
- 工具开发：脚本、脚手架、命令行。

#### 分类举例

压缩： UglifyJS, JSMin
管理： npm, yarn, bower,
模块系统： Commonjs, ESM
模块构建： Babel, Browserify, Webpack, Gulp, Grunt,
yeoman
slush
CRA, CLI

#### 问题
`new Thread()`
- 单线程很脆弱，但是可以通过 cluster / pm2 多核并发实现负载均衡;
- node 对 MongoDB, Mysql, redis / neo4j, tigerGraph;
- 安全问题

#### 和浏览器的区别

- Node 环境中是没有 `DOM`, `BOM`, 同样的，浏览器中也没有 `fs`, `path` 这些模块。 
    - why? 如果浏览器支持 fs 会怎么样？
- 事件循环
    - node 的事件循环
    - 浏览器： 微任务、宏任务、raf、 render、 requestIdleCallback
- `cjs`和`esm`
    - Node.js 使用 CommonJS 模块系统，而在浏览器中我们开始看到正在实施的 ESM 标准。

#### 具体的内核

#### node 安装
这个应该不用说，所有可以进行现代化前端开发的小伙伴，都正在使用。

- nvm
是一个 node 版本管理工具。
- nrm
用于对 node 镜像源进行设置。
- npm 

### 二. npm 相关

gem-Ruby pip-Python maven-java

maven 全局包管理。

spring-framework 2.2.0

org/java/apache/spring/spring-framwork/2.2.0 2.2.1 2.2.2


#### npm 的目标？
> 给你和你的团队、你的公司带来最好的开源库和依赖。

#### npm install 工作原理

#### npm 缓存
`npm config get cache`
`yarn cache dir`

#### npm CI

和 install 不同的是，
1. 必须要有 package-lock.json 文件，
2. 且下载完全依赖该文件；
3. 会删除 node_modules；
4. 如果和 package.json 冲突，则直接报错。
5. 只能一次性安装；
6. 永不改写 package.json 和 package-lock.json 文件。
#### npm 的包依赖关系
`npm dedupe`;


#### xxxDependencies
比如，我们要构建一个 公共组件库。
luyi-ui



##### dependencies 项目依赖
lodash (debounce, deepMerge)

##### devDependencies 开发依赖
webpack, rollup, jest

##### peerDependencies 同版本依赖
vue 组件库。
如果说你连 vue 都没，那这个项目对你来说，没有意义。

##### bundledDependencies 捆绑依赖
{
    bundle1, bundle2
}
##### optionalDependencies 可选依赖
可选依赖。

### 二. commonJS 模块化

#### 什么是 cjs 的模块化

为什么会有 cjs 这种东西，讲一段历史。

#### 手写一个 cjs 规范

#### 关于模块化的问题和说明

#### 一起看看源码


# node API

## node 内置对象

### Buffer
准确的来说，Buffer 是一种计算机中数据流结构。计算机中是以二进制的方式，进行数据存取的。
而 js 在一开始，没有文件读写能力的，就要借助 Buffer 来实现一些缓冲区的内容。
Buffer 一般用于表示固定长度的缓冲区序列。

File new Blob 

#### Buffer 的 API

##### Buffer 的声明
```js
let buf1 = Buffer.alloc(5); // 单位是字节 00000000

let buf2 = Buffer.from('麓一'); // node 中一般编码使用的是 utf-8, 所以一个汉字，是3个字节。
// e9 ba 93 
let buf3 = Buffer.from([0xe9, 0xba, 0x93]);

console.log(buf1);  // -> <Buffer 00 00 00 00 00>
console.log(buf2);  // -> <Buffer e9 ba 93 e4 b8 80>
console.log(buf3.toString()); // -> 麓
```
##### Buffer 和 String 的转换
```js
buf.toString(buffer); 
Buffer.from(string);
```

##### Buffer 的拼接
- copy
```js
let buf1 = Buffer.from('麓一');
let buf2 = Buffer.from('麓一');

let bigBuffer = Buffer.alloc(6); // 分配6个字节

// 第一个0, 表示从0这个位置开始拷贝
// 第二和第三个数字，表示拷贝从几到几的长度。
buf1.copy(bigBuffer, 0, 0, 2);
buf2.copy(bigBuffer, 2, 2, 6);

console.log(bigBuffer.toString());

```
- concat
```js
console.log(Buffer.from('麓一'));
// <Buffer e9 ba 93 e4 b8 80>

let buf1 = Buffer.from([0xe9, 0xba]);
let buf2 = Buffer.from([0x93, 0xe4, 0xb8, 0x80]);

let bigBuffer = Buffer.concat([buf1, buf2], 6);

console.log(bigBuffer.toString());
```

##### Buffer 的截取
```js

let buf1 = Buffer.from('麓一老师');
let buf2 = buf1.slice(0, 6);

console.log(buf2.toString());
```

##### Buffer 的类型判断
```js
Buffer.isBuffer(buf);
```

#### Buffer 进行文件读写
```js
const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '../package.json'), 'utf-8', function(err, data) {
    fs.writeFile(path.resolve(__dirname, '../luyi.json'), data, function(err) {
        console.log('写入成功');
    })
});
```

### Stream 
流
- 防止淹没可用内存。
Buffer 不适合大文件的读取，如果是比较小的文件可以。
但是对于大文件，我们就需要使用流。

```js
const buf = Buffer.alloc(3);

// chomd -R 777
fs.open(path.resolve(__dirname, 'package.json'), 'r', 777, function(err, fd) { // fd文件描述符
    fs.open(path.resolve(__dirname, 'copy.json'), 'w', function(err, wfd) {
        // console.log(fd); // 是一个数字类型，用完需要关闭掉
        function close(){
            fs.close(fd,()=>{})
            fs.close(wfd,()=>{})
        }
        function next() {
            // buf 写入到哪个buffer中，从buffer的哪个位置开始写入3个字节，从文件的第0个位置开始读取
            fs.read(fd, buf, 0, 3, 0, function(err, bytesRead) { // bytesRead 实际读取到的个数，这个个数 不一定是3 ，可能会小于3
                console.log(bytesRead);

                if(bytesRead == 0){
                   return close(); 
                }
                // 写入到文件中，从buffer的第0个位置写入3个字节，写入到文件的第0个位置
                fs.write(wfd, buf, 0, 3, 0, function(err, bytesWritten) {
                    next()
                })
            })
        }
        next();
    })
})
```
#### fs 创建可读流。
```js
const fs = require('fs');
const path = require('path');

const res = fs.createReadStream(path.resolve(__dirname, '../package.json'), {
    flags: 'r',
    start: 0,
    end: 20,
    highWaterMark: 5, // 默认是 64K
    autoClose: true,
    emitClose: true,
});

let arr = [];

res.on('open', function(fd) {
    console.log('fd', fd);
});

res.on('data', function(data) {
    console.log('data', data);
    arr.push(data);
});

res.on('end', function() {
    console.log('end', Buffer.concat(arr).toString());
});

res.on('close', function() {
    console.log('close');
});

res.on('error', function() {
    console.log('error');
});
```

#### 文件压缩
```js
const fs = require('fs');
const path = require('path');

const zlib = require('zlib');

fs.createReadStream(path.resolve(__dirname, '../package.json'))
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(path.resolve(__dirname, '../package.json.gz')));
```

### Event
```js
// 手写一个发布订阅

function EventEmitter() {
    this._events = {};
}

EventEmitter.prototype.on = function(eventName, callback) {
    if(!this._events) this._events = {};
    let eventCbList = this._events[eventName] || (this._events[eventName] = []);
    // 
    eventCbList.push(callback);
    // return () => this.off(eventName, callback);
};

EventEmitter.prototype.emit = function(eventName, ...rest) {
    this._events[eventName] && this._events[eventName].forEach(cb => cb(...rest));
};

EventEmitter.prototype.off = function(eventName, callback) {
    if(!this._events) this._events = {};
    if(this._events[eventName]) {
        this._events[eventName] = this._events[eventName].filter(item => (item != callback) && (item.cb !== callback));
    }
};

// 我只执行一次。
EventEmitter.prototype.once = function(eventName, callback) {
    const once = (...rest) => {
        callback(...rest);
        this.off(eventName, once);
    }

    once.cb = callback;
    this.on(eventName, once);
}



// 

const e = new EventEmitter();
e.on('data', function(msg) {
    console.log('hello' + msg);
});

const handle = function(msg) {
    console.log('hello2' + msg);

}
e.once('data', handle);
setTimeout(() => {
    e.emit('data', 'msg');
    // e.off('data', handle);
    e.emit('data', 'msg');

},500)

```

### cluster
```js
const fs = require('fs');
const path = require('path');
const http = require('http');
// 子进程，开子进程。

const os = require('os'); // operating system
const { default: cluster } = require('cluster');

const cpu_num = os.cpus();

if(cluster.isMaster) {
    for(let i = 0; i <cpu_num.length; i++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.end('childPid', process.pid);
    }).listen(3000);
};

```

## 事件循环

浏览器中，一般情况下： messageBump
- 宏任务
    - Input events
    - keyPress
    - timers
- 微任务
    - promise / await async / generator

- frame
    - resize, scroll, 动画，媒体查询器。

- RAF
    - requestAnimationFrame callbacks
    - IntersectionObserver

- Layout 
    - ResizeObserver

- Paint 
    - 合成

- RequestIdleCallback


 -- 微任务 -- RAF -- Layout -- RequestIdleCallback;


Node 的事件循环：libuv

```
             同步的代码
                 |
     process.nextTick / promise...
                 |
   ┌───────────────────────────┐
┌─>│           timers          │ 定时器： setTimeout / setInterval
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ 执行延迟到下一个循环迭代的I/O回调
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ 系统内部使用
│  └─────────────┬─────────────┘      ┌───────────────┐
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ setImmediate 
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ 关闭回调函数
   └───────────────────────────┘

```

- 定时器：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
- 待定回调：执行延迟到下一个循环迭代的 I/O 回调。
- idle, prepare：仅系统内部使用。
- 轮询：检索新的 I/O 事件; 执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。
- 检测：setImmediate() 回调函数在这里执行。
- 关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。

nextTick 的优先级？

script start.
async1 started
async2
promise1
promise2
script end

nextTick
async end
promise.then

setTimeout0
setImmediate
setTimeout1

浏览器事件循环：


《深入浅出 node.js》 - 朴灵
《狼书》 - 狼叔

koa, express, egg.

