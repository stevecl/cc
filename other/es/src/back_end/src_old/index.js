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
