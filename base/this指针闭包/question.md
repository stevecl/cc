


## 作业
1. 实现一个标准的 es5-shim 版 bind 
```js
function bind(that) {
    var target = this;
    if (!isCallable(target)) {
        throw new TypeError('Function.prototype.bind called on incompatible ' + target);
    }
    var args = array_slice.call(arguments, 1);
    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                array_concat.call(args, array_slice.call(arguments))
            );
            if ($Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                array_concat.call(args, array_slice.call(arguments))
            );
        }
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        array_push.call(boundArgs, '$' + i);
    }
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

    if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
}
```

2. 实现一个 call 函数
```js
function called(context) {
    const args = Array.prototype.slice.call(arguments, 1);
    // 用显式调用的方式，进行模拟。
    context.fn = this;
    if(context) {
        const result = context.fn(...args);
        delete context.fn;
        return result;
    } else {
        return this(...args)
    }
}
```

3. this 的使用规则
this的指向：this的指向是根据执行上下文动态决定的。
- 在简单调用时，this默认指向的是 `window` / `global` / `undefined`; 浏览器端，node端，严格模式。
- 对象调用时，绑定在对象上
- 使用 call / apply / bind 的时候，绑定在指定的参数上；
- 使用 new 关键字， 通过构造函数调用创建对象上；
- 以上三条优先级： new > call/apply/bind > 对象调用;
- 使用箭头函数时，根据外层的规则，决定 this 的指向。

4 什么是闭包
> 函数嵌套函数时，内层函数引用了外层函数作用域下的变量，并且内层函数，在全局环境下可访问，就形成了闭包。
> 当函数的执行上下文，没有在原本的词法作用域内，就形成了闭包。