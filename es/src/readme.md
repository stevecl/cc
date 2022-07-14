# es6 实战

## 时间安排
0-15 express 和 洋葱模型介绍；
15-35 koa 基本用法；
35-80 koa 装饰器；
80-100 前端


## 前端启动
- yarn install
- yarn dev

## 后端启动
- rollup -c -w (等待30s)
- nodemon ./dist/bundle.js


## 后端 - node 框架；

### Koa 
- express 
    - Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。
    - 回调函数；
    - 内置了很多 中间件；
- koa
    - Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。
    - async / await ；
    - 中间件需要第三方引用；
- restana
- nest (next.js, nuxt.js)

#### 洋葱模型
- 中间件(middleware / compose)：
    - redux 的中间件 reduce();
    - koa 的中间件 dispatch 递归函数;
    - axios //  [ ] req -> unshift(); res -> push()

- express 

#### koa 

##### 基本写法
```js
const Koa = require("koa");
const app = new Koa();

const main = ctx => {
    ctx.body = "hello Koa";
}

app.use(main);
app.listen(3002, () => {
    console.log('Koa server is running in 3002')
})
```

##### koa-router
```js
// index.js
import Koa from 'koa';
import Router from 'koa-router';
// const Koa = require("koa");
// const Router = require('koa-router');

import movie from './movie';
import user from './user';

const app = new Koa();
const router = new Router();

// router.get('/api', (ctx, next) => {
//     ctx.type = "application/json";
//     ctx.body = { data: "hello Api" };
// })

[movie, user].forEach(route => {
    app.use(route.routes());
    app.use(route.allowedMethods());
})

app.listen(3002, () => {
    console.log('Koa server is running in 3002')
})

// movie.js
import Router from 'koa-router';

// koa-cors
// koa-bodyparser
// koa-helmet

const router = new Router();

router.get('/movie', async (ctx, next) => {
    ctx.body = "Movie"
})

export default router;
```


##### 做一个装饰器
```js
export const RequestMethod = {
    "GET": 'get',
    "POST": 'post',
    "PUT": 'put',
    "DELETE": 'delete',
    "OPTION": 'option',
    "PATCH": 'patch'
}

export const controllersArray = [];

// 装饰器对类的行为的改变，是代码编译时发生的，而不是运行时；
// 所以，在之前就干了这么一件事
// movieController -->   movieController.prefix = "/movie"
export function Controller(prefix = "") {
    return function (target) {
        target.prefix = prefix;
    }
}

export function RequestMapping(method = "", url = "") {
    return function (target, name, descriptor) {
        let path = '';
        if (!url) {
            path = '/' + name;
        } else {
            path = url;
        }
        // 创建 router 需要的数据
        const item = {
            url: path,
            method: method,
            handler: target[name],
            constructor: target.constructor,
        }
        controllersArray.push(item)
    }
}
```


## 前端 
- svelte(react / vue) 
- rollup(webpack)
- smelte(antd / element)
- tailwind CSS (bootstrap / css / postcss)

## 后端
- Sequelize(java-mybatis)

## 其他
### Rollup
rollup -c -w 
- c: 找根目录的 `rollup.config.js` 作为我的构建的配置；
- w: watch 监听文件的变化，实时构建；

### 中间件
redux-compose
```js
function(arr) {
    return arr.reduce((a, b) => (...args) => a(b(...args)) )
}
```

## 面向切面。


## 继承 
### oop 
java -> 一切皆对象。
创建对象的方式
__proto__ prototype
继承 -- 组合寄生 / es6


