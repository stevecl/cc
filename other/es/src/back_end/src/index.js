import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { controllersArray } from './utils/decorator';

import R from './controller/index'

const router = new Router();
const app = new Koa();

// cors 
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Content-Type', 'application/json;charset=utf-8');
    if (ctx.request.method.toLowerCase() == 'options') {
        ctx.state = 200;
    } else {
        await next();
    }
})

app.use(bodyParser());

controllersArray.forEach(item => {
    let { url, constructor, method, handler } = item;
    const { prefix } = constructor;
    if (prefix) url = `${prefix}${url}`;
    router[method](url, handler)
})

app.use(router.routes());
app.listen(3003, () => {
    console.log("server running 3003")
})