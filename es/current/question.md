## 请实现一个组合寄生继承
```js
function inherit() {

}
function Parent(actions, name) {
    this.actions = ['eat', 'work', 'sleep'];
    this.name = 'parentName';
}

Parent.prototype.work = function() {
    console.log(`${this.name} coding evenyday...`)
}

function Child(play){ 
    // 
    Parent.apply(this, Array.prototype.slice.call(arguments, 1));
    this.play = play;
}
// 问题： 
Child.prototype = Object.create(Parent.prototype);
// Child.prototype = inherit(Parent.prototyep)
Child.prototype.constructor = Child;
```

## new 关键字做了什么？
- 创建了一个对象;
- 该对象的原型，指向了这个 Function（构造函数）的 prototype;
- 该对象实现了这个构造函数的方法;
- 根据一些特定情况返回对象
    - 如果没有返回值，则返回创建的对象；
    - 如果有返回值，是一个对象，则返回该对象；
    - 如果有返回值，不是个对象，则返回创建的对象；

## 请实现一个 new 函数
```js
function newObj(Father) {
    if(typeof Father !== "function") {
        throw new Error("new operator function the frist param must be a function!")
    }
    var obj = Object.create(Father.prototype);
    var result = Father.apply(obj, Array.prototype.slice.call(arguments, 1));
    
    
    return result && typeof result === "object" && result !== null ? result : obj;
}

```

## Object.create 的参数，如何和 {} 的结果保持一致？
使用 `Object.create(Object.prototype)` 相当于 直接定义一个 `{}` 对象。

## Object.create(null) 有何问题
没有 Object 的 原型方法。