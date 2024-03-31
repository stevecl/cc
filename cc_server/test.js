const Koa = require('koa');
const { createProxyMiddleware } = require('http-proxy-middleware');
const koaConnect = require('koa-connect');
const serve = require('koa-static')

const app = new Koa();
app.use(serve('../maytek-cashier'))

app.use(koaConnect(createProxyMiddleware('/prod-api', { 
  target: 'https://pet-pre.maytek.cn', // 目标服务器地址
  changeOrigin: true,
})));

app.listen(3000);