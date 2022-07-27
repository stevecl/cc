import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()

app.use(async ctx => {
    ctx.body = 'test content'
})

app.listen(4444)