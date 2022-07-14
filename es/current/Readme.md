# 类与继承

## 课程目标
- 知道组合寄生继承，知道class继承。
- 知道怎么创建类function + class。

## 课程内容
0-25分，面向对象的概念
25-60分，对象的创建
60-100分，继承

### 类
- ES6 class, extends; 
- OOP的思想;
- 设计模式; ORM;

### 面向过程 和 面向对象
object oriented programming

如果我们要吃一道菜：
#### 从面向过程的角度
```js
// 回锅肉
// 养猪、获取猪肉、煮肉、炒、端盘、吃。
getPork();
cookDish();
haveDinner();
```

#### 从面向对象的角度
-> 吃。
什么是面向对象？-- 一切皆对象。
`cooker.deal(pork) -> reCookedPork`
`me.eat(reCookedPork)`

#### 从函数式编程的角度
`pig -> pork -> reCookedPork`
```js
    pig.getBigger()
        .killed()
        .cook() 
        
    [1,2,3,4,5].map(item => item * 2)
        .filter(item => item > 10)
        .join(',')
```


### JS 对象的创建
#### 创建一个对象有哪些方式？
##### Object.create();
Object.create 创建了一个对象;
let p = Object.create(q)  ->  p.__proto__ = q;
p 的原型，指向了 q;
当我需要调用p对象的一个方法或者属性的时候，如果p 上面没有，我回去 q 上去找。

##### var obj = {};
obj.__proto__ = Object.prototype;

let p = Object.create({})
相当于：
let p = Object.create(obj)
相当于：p.__proto__ = obj;
p.__proto__.__proto__ = Object.prototype;

{} -- Object.create(Object.prototype);

##### new Function();
- 创建了一个对象;
- 该对象的原型，指向了这个 Function（构造函数）的 prototype;
- 该对象实现了这个构造函数的方法;
- 根据一些特定情况返回对象
    - 如果没有返回值，则返回创建的对象；
    - 如果有返回值，是一个对象，则返回该对象；
    - 如果有返回值，不是个对象，则返回创建的对象；

```js

function newObj(Father) {
    if(typeof Father !== "function") {
        throw new Error("new operator function the frist param must be a function!")
    }
    var obj = Object.create(Father.prototype);
    var result = Father.apply(obj, Array.prototype.slice.call(arguments, 1));
    
    
    return result && typeof result === "object" && result !== null ? result : obj;
}

// newObj(Person, name, age)
```
```js 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person();
// Person 是构造函数。
p.__proto__ === Person.prototype //  = { ..., constructor: Person };
Person.prototype.constructor === Person;
p.constructor === Person;
```

### 继承

其实，实现一个继承，主要就是两个部分：
- 使用父类的构造函数的方法；
- 让对象的原型链指向父类；

#### 原型链继承

```js
function Parent() {
    this.name = "father";
}

Parent.prototype.getName = function() {
    console.log(this.name);
}

function Child(){};

// Child.prototype.__proto__ = Parent.prototype
Child.prototype = new Parent();
Child.prototype.constructor = Child;
// 隐含的问题：
// 1. 如果有属性是引用类型，一旦某个实例，修改了这个属性，所有的都会被改；
// 2. 创建 Child 的时候不能传参数；

```

#### 构造函数继承
```js
// 想办法把Parent 上的属性和方法，添加到 Child 上面去，而不是都存在在原型对象上，防止被实例共享；

function Parent(actions, name) {
    this.actions = ['eat','work', 'sleep'];
    this.name = 'parentName';
}

function Child(play){ 
    Parent.apply(this, Array.prototype.slice.call(arguments, 1));
    this.play = play;
}
// 隐含的问题
// 1. 属性或者方法向被继承的话，只能在构造函数中定义；
// 2. 如果方法在构造函数中定义了，那么每次创建实例都会创建一遍方法。
```

#### 组合继承
```js
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
// Child.prototype.__proto__ = Parent.prototype;
Child.prototype = new Parent();
Child.prototype.constructor = Child;
```

#### 组合寄生式继承

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

#### es6 继承
```js
class A{

}

class B extends A {
    constructor() {
        super();
        // this.xxx
    }
}

// super 作为函数调用时，要求自雷必须执行一次。
// 因为子类自己的 this 对象，必须通过父类的构造函数完成。
// es6 继承， 会继承静态的方法和属性。
```

```js
// @antv

// 点、线、面

class XXX extends React.Component {
    
}


```

this, 闭包, 继承
- 《高级程序设计》
- 《JavaScript设计模式与开发实践》 - 前两章
- 《你不知道的JavaScript》