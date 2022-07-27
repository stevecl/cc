(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('koa')) :
    typeof define === 'function' && define.amd ? define(['koa'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Koa));
})(this, (function (Koa) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Koa__default = /*#__PURE__*/_interopDefaultLegacy(Koa);

    const app = new Koa__default["default"]();
    app.use(async ctx => {
      ctx.body = 'test content';
    });
    app.listen(4444);

}));
