## 函数式
### 一、函数式编程的出现 - lodash ramda
* 发展历程：命令（脚本）式 -> 面向对象式 -> 函数式编程

#### 1. 问题的出现 - 从一道面试题开始
```js
    // 面试题： 上接浏览器原理 —— 参数 parse
    // 1. 数组在url中展示形式
    // location.search => '?name[]=progressive$%coding&name[]=objective$%coding&name[]=functional$%coding'
    // 2. 参数提取拼接成数组
    // ['progressive$%coding', 'objective$%coding', 'functional$%coding']
    // 3. 手写方法，转换成数组对象
    // [{name: 'Progressive Coding'}, {name: 'Objective Coding'}, {name: 'Functional Coding'}]

    const _array = ['progressive$%coding', 'objective$%coding', 'functional$%coding'];
    const _objArr = [];

    const nameParser = (array, objArr) => {
        array.forEach(item => {
            let names = item.split('$%');
            let newName = [];

            names.forEach(name => {
                let nameItem = name[0].toUpperCase() + name.slice(1);

                newName.push(nameItem);
            })
            objArr.push({
                name: newName.join(' ');
            });
        })
        return objArr
    }

    console.log(nameParser(_array, _objArr));

    // 问题：
    // 1. 过程中存在逻辑包裹 - 看完整段代码，才能明白在做啥
    // 2. 存在临时变量，并且收尾封闭 - 迭代拓展难度高
```

#### 2. 解决方案
```js
    // step1. 需求分析 => 数组 > 数组对象 => [字符串 > 对象]
    // nameParser => [objHelper :: string > object]

    // step2. 模块功能明确 => objHelper = formatName + assembleObj

    // step3. 功能拆分 => objHelper = [(split + capitalize + join)] + assembleObj

    // step4. 代码实现
    // 输入
    const _array = ['progressive$%coding', 'objective$%coding', 'functional$%coding'];

    // 原子操作
    const assembleObj = (key, x) => {
        let obj = {};

        obj[key] = x;
        return obj;
    }
    const capitalize = name => name[0].toUpperCase() + name.slice(1);

    // 组装描述
    const formatName = R.compose(join(' '), map(capitalize), split('$%'));
    const objHelper = R.compose(assembleObj('name'), formatName);
    const nameParser = map(objHelper);

    // 使用
    nameParser(_array);

    // 面试题：正确的遍历 - for forEach （map （filter sort））……
    // 本质作用 => 通用遍历 | 遍历逻辑处理 | 生成数组 - 处理后 | 生成数组 - 处理后 - 过滤 | 生成数组 - 处理后 - 排序

    let class = 'functional';
    let isOvered = false;

    // forEach
    classArr.forEach(item => {
        isOvered = item === class;
    })

    classArr.map(item => item.name === 'functional')
```

### 二、函数式编程的原理特点
#### 1. 什么是函数式编程的原理？
* 加法结合律 | 因式分解 | 完全平方公式 =>  a + b + c = (a + b) + c 原子组合的变化
* 水源 => 组合（水管 + 走线）=> 浴缸

#### 2. 理论思想
##### a. 一等公民 —— 函数 => 1. 逻辑功能实现的落脚点 —— 函数 2. （实现 + 拼接）* 函数
##### b. 声明式编程 => 声明需求 => 语义化： react vue3
##### c. 惰性执行 - 无缝连接，性能节约
```js
    // 惰性函数
    let program = name => {
        if(name === "progressive") {
            return program = () => {
                console.log('progressive');
            }
        } else if (name === "objective") {
            return program = () => {
                console.log('objective');
            }
        } else {
            return program = () => {
                console.log('functional');
            }
        }
    }

    program("progressive")();
    console.log("lazy");
    program();
    // progressive lazy progressive
```

#### 3. 无状态与无副作用 - rxjs
* a. 无状态 - 幂等；数据不可变 - 不可操作改变源数据
* b. 无副作用 - 函数内部不应该直接对整个系统中任何参数变量做改动

### 三、实际开发
#### 1. 纯函数改造
```js
const _class = {
    name: 'objective'
}
// 函数内部引入外部变量后 —— 违反了无状态
const score = str => _class.name + ':' + str;

// 修改了传入参数 —— 无副作用
const changeClass = (obj, name) => obj.name = name;

changeClass(_class, 'functional');
score('good!');

// ##################################
const _class = {
    name: 'objective'
}

const score = (obj, str) => obj.name + ':' + str; // 不依赖外部变量
const changeClass = (obj, name) => ({...obj, name}); // 未修改外部变量
 
changeClass(_class, 'functional');
score(_class, 'good!');
```

#### 2. 流水线组装 - 加工 & 组装
##### a. 加工 - 科里化
```js
// f(x, y, z) -> f(x)(y)(z)
const sum = (x, y) => {
    return x + y;
}
sum(1, 2);

const add = x => {
    return y => {
        return x + y;
    }
}
add(1)(2);

// 实现 体系 = 加工 + 组装，单个加工输入输出应当单值化 -> 需求
const fetch = ajax(method, url, params);

const request = ajax(method);
const fetch = request(url);
ajax(method)(url)(params)
```

* 面试题：手写构造可拆分传参的累加函数
add(1)(2)(3)……
```js
    // 1. 构造科里化结构
    // 2. 输入 处理外部arguments => 类数组形态处理
    // 3. 传入参数无限拓展 => 递归 内层逻辑 => 返回函数
    // 4. 主功能实现 => 累加
    // 5. 输出

    const add = function() {
        // 输入
        let args = Array.prototype.slice.call(arguments);

        // 内层处理
        let inner = function() {
            args.push(...arguments); // 内外层参数合并
            return inner;
        }

        inner.toString = function() {
            return args.reduce((prev, cur) => {
                return prev + cur;
            });
        }

        return inner;
    }

    '' + add(1)(2)(3)(4) // '10'
    parInt(add(1)(2)(3)(4), 10) // 10
```

##### b. 流水线 - 组装函数
```js
    const compose = (f, g) => x => f(g(x))

    const sum1 = x => x + 1;
    const sum2 = x => x + 2;
    const sum12 = compose(sum1, sum2);
    sum12(1);
```
* 实际实现使用
```js
    // 命令式
    trim(reverse(toUpperCase(map(arr))));

    // 面向对象
    arr.map().toUpperCase().reverse().trim();

    // 函数式
    const result = compose(trim, reverse, toUpperCase, map);
    pipe(map, toUpperCase, reverse, trim); // history | grep rm
```

### 四、 BOX 与 函子
```js
    // 一封信
    class Mail {
        constructor(content) {
            this.content = content;
        }
        map(fn) {
            return new Mail(fn(this.content));
        }
    }

    // 1. 拆开信
    let mail1 = new Mail('love');
    // 2. 读了信
    let mail2 = mail1.map(function(mail) {
        return read(mail);
    })
    // 3. 烧了信
    let mail3 = mail1.map(function(mail) {
        return burn(mail);
    })
    // 4. 老师查寝时候
    mail3.map(function(mail) {
        return check(mail)
    })

    // 链式
    new mail('love')
        .map(read)
        .map(burn)
        .map(check)
```
