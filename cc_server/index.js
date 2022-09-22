const path = require('path')
const Koa = require('koa');
const Router = require('koa-router')
const serve = require('koa-static')

const app = new Koa();
const router = new Router()

// 静态文件托管
app.use(serve('./web'))

// chu处理跨域
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Methods', 'POST');
    await next();
});

// 测试 接口
router.get('/api/test', ctx => {
    ctx.body = {
        status: 1,
        content: 'test'
    }
})
router.post('/api/news', ctx => {
    ctx.body = {
        status: 1,
        content: [1, 2, 3, 5]
    }
})

// 测试 中间件
app.use(async (ctx, next) => {
    console.log("querying start 1", ctx.request.method , ctx.request.url);
    next();
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(80)
