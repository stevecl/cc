(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('koa'), require('koa-router')) :
    typeof define === 'function' && define.amd ? define(['koa', 'koa-router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Koa, global.Router));
})(this, (function (Koa, Router) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Koa__default = /*#__PURE__*/_interopDefaultLegacy(Koa);
    var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

    const router$2 = new Router__default["default"]();
    router$2.get('/movie', async (ctx, next) => {
      ctx.body = 'movie';
    });

    const router$1 = new Router__default["default"]();
    router$1.get('/user', async (ctx, next) => {
      ctx.body = 'user';
    });

    const app = new Koa__default["default"]();
    const router = new Router__default["default"](); // app.use(async ctx => {
    //     ctx.type = 'application/json'
    //     ctx.body = 'test cont2ent'
    // })

    [router$2, router$1].forEach(route => {
      console.log('route', route);
      app.use(route.routes());
      app.use(route.allowedMethods());
    });
    app.listen(4444, () => {
      console.log('koa server is running in 4444');
    });

}));
