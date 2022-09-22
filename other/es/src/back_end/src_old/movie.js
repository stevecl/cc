import Router from 'koa-router';

const router = new Router();

router.get('/movie', async (ctx, next) => {
    ctx.body = "Movie"
})

export default router;