const Koa = require('koa');
const { createProxyMiddleware } = require('http-proxy-middleware');
const koaConnect = require('koa-connect');
const serve = require('koa-static')
const Router = require('koa-router')


const app = new Koa();
const router = new Router()
app.use(serve('./web'))

app.use(koaConnect(createProxyMiddleware('/custom', { 
  target: 'http://test-boss.beixiaoji.cn', // 目标服务器地址
  changeOrigin: true,
})));

// 处理跨域
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  ctx.set('Access-Control-Allow-Methods', 'POST');
  await next();
});

// 测试 接口
router.get('/api/test', ctx => {
  console.log('test')
  ctx.body = {
      status: 1,
      content: 'test'
  }
  console.log('test22')
})
// 测试 接口
router.get('/diyAdvert/list', ctx => {
  console.log('/diyAdvert/list')
  ctx.body = {
      status: 1,
      content: 'test'
  }
  console.log('test22')
})

// 测试 中间件
app.use(async (ctx, next) => {
  console.log("querying start 1", ctx.request.method , ctx.request.url);
  await next();
  console.log("querying start 3", ctx.request.method , ctx.request.url);
})

app.use(async (ctx, next) => {
  console.log("querying start 2", ctx.request.method , ctx.request.url);
  next();
  console.log("querying start 4", ctx.request.method , ctx.request.url);
})

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(3000);