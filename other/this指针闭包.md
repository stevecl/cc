# this 与闭包

## 课程大纲
- 了解作用域和上下文，知道其中的区别；P6+
- 知道闭包在实际场景中怎么用，常见的坑；P6
- 能将继承、作用域、闭包、模块这些概念融汇贯通，并且结合实际例子说明这几个概念怎样结合在一起；P6+；

## 课程内容
0-10分 ------ 扯淡；
10-45分 ----- 词法作用域；
45-60分 ----- 执行上下文；



## 作用域和上下文
### 作用域
- 作用域，简单来说，就是在特定的场景下，特定范围内，查找变量的一套规则。
    - 一般情况下，我们特指：词法作用域、静态作用域。
    - 一般是代码层面上的。
- 分类
    - 全局作用域
    - 函数作用域
        - 在函数内声明的所有变量，在函数体内是始终可见的，可以再整个函数范围内复用；
    - 块作用域
        - 是一个用来对之前的最小授权原则进行扩展的工具，将代码在函数中隐藏信息扩展为在块中。

```js
// example 1
function foo(a) {
  console.log(a);
}
foo(2);

// example 2
// example 2
function bar() {
    var b = 5;
};

function foo(a) {
    console.log(a + b);
    let b = 3;
};
foo(2);

```
- foo 和 bar 中的 b ，分属于两个独立且不同的作用域
- 为什么 Cannot access 'b' before initailization 
    - let 作为块级作用域，会存在暂时性死区；
- 为什么 NaN
    - 变量提升；


#### 块级作用域和暂时性死区
- 哪些会构成块级作用域
    - if
    - for
    - {...}

- 暂时性死区
    - 从 `let` 声明的变量的块的第一行，到声明变量之间的这个区域，被称为暂时性死区；
    - 暂时性死区存在时，会让 `let` 绑定这个区域，在这个区域内，无法执行该变量的其他声明；

### 函数表达式

- JS 是如何运行起来的？
    - 代码的预编译阶段
        - 会对变量的内存空间进行分配；
        - 对变量声明进行提升，但是值为 undefined;
        - 对所有的非表达式的声明进行提升；

```js
var bar = function() {
    console.log('bar2');
}

function bar() {
    console.log('bar1');
}  

// 相当于是 ---------->
function bar(){
    console.log('bar1');
}
var bar;
bar = function() {
    console.log('bar2');
}
bar();
```

## 执行上下文
- 作用域关注的函数声明在何处，而上下文，主要关注的是，函数从何处开始调用。

## 闭包
> 函数嵌套函数时，内层函数引用了外层函数作用域下的变量，并且内层函数，在全局环境下可访问，就形成了闭包。
> 当函数的执行上下文，没有在原本的词法作用域内，就形成了闭包。

闭包常见的场景
- 函数式编程
- window - event handler 
- setTimeout


## this

this 的使用规则
this的指向：this的指向是根据执行上下文动态决定的。
- 在简单调用时，this默认指向的是 `window` / `global` / `undefined`; 浏览器端，node端，严格模式。
- 对象调用时，绑定在对象上
- 使用 call / apply / bind 的时候，绑定在指定的参数上；
- 使用 new 关键字， 通过构造函数调用创建对象上；
- 以上三条优先级： new > call/apply/bind > 对象调用;
- 使用箭头函数时，根据外层的规则，决定 this 的指向。

```js
var number = 5; // 10 // 20
var obj = {
    number: 3,
    fn1: (function () { // 这里是一个立即执行函数，所以 JS 在解析的时候就会执行。
        var number;  // 持久化变量 3 -- 9 -- 27
        this.number *= 2; // 全局定义的 number，会变成 10；
        number = number * 2;
        number = 3; // 这里是3；
        return function () {
            var num = this.number;  
            this.number *= 2;  // 全局的又变成了 20
            console.log(num);  // --》【10】 --〉 3
            number *= 3; 
            console.log(number);  // --》 【9】。--〉 27
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null); // fn1();
obj.fn1();
console.log(window.number);

// 10， 9， 3， 27 ，20 //

// call / bind / apply
```

### 你在开发过程中，什么情况下需要考虑 this 的指向问题？
- 存在函数式编程的时候，出现闭包的时候，就要考虑了。


### bind / apply / call 的实现
```js
// - 80分

// 在不考虑 new 的优先级的情况下：
Function.prototype.bind = Function.prototype.bind || function (context) {
    const fn = this;
    // get bind 's params
    const args = Array.prototype.slice.call(arguments, 1);
    return function(...innerArgs) {
        const allArgs = [...args, ...innerArgs];
        return fn.apply(context, allArgs);
    }
}

/////// test ///////
function foo() {
    this.baz = "bar";
    return this.baz;
}
var func = foo.bind({baz:"baz"});
func() // "baz";
new func(); // baz: bar

///// 如果考虑到 new 的一个优先级 /////
// bind 返回的函数如果作为构造函数，搭配 new 关键字出现的话，这种绑定，就需要被忽略，this要绑定在实例上，也就是说，new 操作符要高于bind 绑定：

Function.prototype.bind = Function.prototype.bind || function (context) {
    const fn = this;
    // get bind 's params
    const args = Array.prototype.slice.call(arguments, 1);
    var F = function() {};
    F.prototype = this.prototype;
    var bound = function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        const allArgs = [...args, ...innerArgs];
        // 如果存在new, 我绑定的对象不一样了。
        return fn.apply(this instanceof F ? this: context || this, allArgs );
    }
    bound.prototype = new F();
    return bound;
}

// length 属性没有修复

```

### 实现一个 call 函数
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



## 学习方法：
### 费曼技巧
- 
### 面试
- P6：干活的一把好手。
JS ----------------
React -------------
Vue ---------
跨端 -------
node ------

- P7：
JS -----------
React -----------------------------  可视化、复杂BI系统、搭建系统、
                                     高并发、日活、
Vue ----
跨端 ---
node --
“方案”、“思路”、“管理”。
### 难点，亮点
- 换一个人，在具备你现在的条件下，要多久能做出来？




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