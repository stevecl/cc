## 问题

### 1. ES 的装饰器有哪些？
- 类装饰器
    - 可以用来装饰整个类
    ```js
    @testable
    class MyTestableClass {
    // ...
    }

    function testable(target) {
    target.isTestable = true;
    }

    MyTestableClass.isTestable // true
    ```
- 方法、属性装饰器
```js
class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}
// 装饰器第一个参数是类的原型对象，上例是Person.prototype，装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）；第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象。
```

## 2. 为什么装饰器不能用于函数？
装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
另一方面，如果一定要装饰函数，可以采用高阶函数的形式直接执行。

## 3. 请实现一个 koa-compose

```js
function compose(args) {
    let result ;
    return function(ctx) {
        let i = 0;
        let dispatch = function(i, ctx) {
            let fn ;
            if(i < args.length) fn = args[i];
            // console.log(ctx)
            if(i === args.length) {
                result = ctx; 
                return;
            }
            return fn(ctx, dispatch.bind(null, ++i));
        }
        dispatch(0, ctx);
        return result;
    }
}
// 测试：
function discount (ctx, next) {
    console.log("starting discount..")
    next(ctx * 0.8) // 八折优惠
    console.log("ending discount..")
}

function express (ctx, next) {
    console.log("starting express..")
		next(ctx + 12) // 不包邮，12元运费
    console.log("ending express..")

}

function num (ctx, next) {
    console.log("starting num..")
		next(ctx * 10) // 一共十个
    console.log("ending num..")
}
const c = compose([num, discount, express]);
console.log(c(15))
```


## 4. 如何在 node 环境下使用 esm 规范？

1. 利用编译工具运行 esm，比如课程中的 Rollup 的方式；
2. 使用一些工具直接运行，比如 babel-node；
3. 使用mjs作文文件后缀；
4. 在package.json中配置module；

## 5. 说一下你理解的 svelte?
- 开放性问题。
- 可以考虑从：编译体积、编译期的工作以及语法规范这几个方面进行回答。