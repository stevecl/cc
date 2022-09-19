import Koa from 'koa'
import Router from 'koa-router'

import movie from './movie'
import user from './user'


const app = new Koa()
const router = new Router();

// app.use(async ctx => {
//     ctx.type = 'application/json'
//     ctx.body = 'test cont2ent'
// })

[movie, user].forEach(route => {
    app.use(route.routes())
    app.use(route.allowedMethods())
});

app.listen(4444, () => {
    console.log('koa server is running in 4444')
});