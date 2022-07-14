## JS模块化
### 1. 不得不说的历史
JS本身就是为了满足简单的页面设计： 页面动画 + 表单提交
并无模块化 or 命名空间的概念

> JS的模块化需求日益增长

#### 幼年期：无模块化
1. 开始需要在页面中加载不同的JS：动画、组件、格式化
2. 多种js文件会被分在不同的文件中
3. 不同的文件又被同一个模板所引用

```js
  <script src="jquery.js"></script>
  <script src="main.js"></script>
  <script src="dep1.js"></script>
```
认可：
文件分离拆分是最基础的模块化（第一步）

* 追问：
script标签的参数 - async & defer
```js
  <script src="jquery.js" async></script>
```

总结：
普通 - 解析到立即阻塞，立刻下载执行当前script
defer - 解析到标签开始异步下载，解析完之后开始执行
async - 解析到标签开始异步下载，下载完成后开始执行并且阻塞渲染，执行完成之后继续渲染

1. 兼容性 > IE9
2. 问题可以被引导到 => 1. 浏览器渲染原理 2. 同步异步原理 3. 模块化加载原理

问题出现：
* 污染全局作用域 => 不利于大型项目的开发以及多人团队的共建

#### 成长期：模块化前夜 - IIFE(语法侧的优化)
##### 作用域的把控
例子：
```js
  let count = 0;
  const increase = () => ++count;
  const reset = () => {
    count = 0;
  }
```

利用函数的块级作用域 - 隔离区
```js
 (() => {
   let count = 0;
   // ……
 })();
```
初步实现了一个最最最最最最简单的模块

尝试定义一个最简单的模块
```js
  const iifeModule = (() => {
    let count = 0;
    const increase = () => ++count;
    const reset = () => {
      count = 0;
    }
    console.log(count);
    increase();
  })();
```

* 追问：独立模块本身的额外依赖，如何优化
> 优化1： 依赖其他模块的传参型
```js
  const iifeModule = ((dependencyModule1, dependencyModule2) => {
    let count = 0;
    const increase = () => ++count;
    const reset = () => {
      count = 0;
    }
    console.log(count);
    increase();
  })(dependencyModule1, dependencyModule2);
```
** 面试1：了解jquery或者其他很多开源框架的模块加载方案
```js
  const iifeModule = ((dependencyModule1, dependencyModule2) => {
    let count = 0;
    const increase = () => ++count;
    const reset = () => {
      count = 0;
    }
    console.log(count);
    increase();
    return {
      increase, reset
    }
  })(dependencyModule1, dependencyModule2);
  iifeModule.increate();
  iifeModule.increate();
```
=> 揭示模式 revealing => 上层无需了解底层实现，仅关注抽象 => 框架

* 追问
1. 继续模块化横向展开
2. 转向框架： jquery|vue|react模块化细节
3. 转向设计模式

#### 成熟期：
##### CJS - Commonjs
> node.js指定
特征：
* 通过module + exports 去对外暴露接口
* 通过require去引入外部模块

```js
// main.js
const dependencyModule1 = require('./dependencyModule1');
const dependencyModule2 = require('./dependencyModule2');

let count = 0;
const increase = () => ++count;
const reset = () => {
  count = 0;
}
console.log(count);
increase();

exports.increase = increase;
exports.reset = increase;

module.exports = {
  increase, reset
}

// exe
const { increase, reset } = require('./main.js')

// #####################################
// 复合使用
(function(thisValue, exports, require, module) {
  const dependencyModule1 = require('./dependencyModule1');
  const dependencyModule2 = require('./dependencyModule2'); 

  // 业务逻辑……
}).call(thisValue, exports, require, module);

// 一些开源项目为何要把全局、指针以及框架本身引用作为参数
(function(window, $, undefined) {
  const _show = function() {
    $("#app").val("hi zhaowa");
  }
  window.webShow = _show;
})(window, jQuery);

// 阻断思路
// window - 1. 全局作用域转化成局部作用域，提升执行效率 2. 编译时优化
(function(c){})(window) // window会被优化成c
// jquery - 1. 独立定制复写和挂载 2.防止全局串扰
// undefined - 防止重写
```

> * 优点：
CommonJs率先在服务端实现了，从框架层面解决了依赖、全局变量污染的问题
* 缺点：
针对了服务端的解决方案。异步拉取依赖处理不是很完美

新的问题 —— 异步依赖

#### AMD规范
> 通过异步加载 + 允许制定回调函数
经典实现框架：require.js

新增定义方式：
```js
// define来定义模块
define(id, [depends], callback);
// require进行加载
require([module], callback);
```
模块定义地方
```js
  define('amdModule', ['dependencyModule1', 'dependencyModule2'], (dependencyModule1, dependencyModule2) => {
    // 业务逻辑……
  })
```
引入的地方
```js
  require(['amdModule'], amdModule => {
    amdModule.increase();
  })
```

**面试题: 如果在AMDModule中想兼容已有代码，怎么办？
```js
  define('amdModule', [], require => {
    const dependencyModule1 = require('./dependencyModule1');
    const dependencyModule2 = require('./dependencyModule2');
    // 业务逻辑……
  })
```

**面试题：手写兼容CJS&AMD
```js
  // 判断关键step1. object还是function step2. exports？ step3. define
  (define('amdModule'), [], (require, export, module) => {
    const dependencyModule1 = require('./dependencyModule1');
    const dependencyModule2 = require('./dependencyModule2');
    
    let count = 0;
    const increase = () => ++count;
    const reset = () => {
      count = 0;
    }
    export.increase = increase();
  })(
    // 目标：一次性区分CJS还是AMD
    typeof module === "object"
    && module.exports
    && typeof define !== "function"
      ? // 是CJS
        factory => module.exports = factory(require, exports, module)
      : // AMD
        define
  )
```
> * 优点：适合在浏览器中加载异步模块的方案
* 缺点：引入成本

##### CMD
> 按需加载
主要应用框架： sea.js
```js
  define('module', (require, exports, module) => {
    let $ = require('jquery');
    // jquery相关逻辑

    let dependencyModule1 = require('./dependencyModule1');
    // dependencyModule1相关逻辑
  })
```
> * 优点： 按需加载，依赖就近
* 缺点：依赖打包，加载逻辑存在于每个模块中，扩大了模块体积，同时功能上依赖编译

#### ES6模块化
> 走向新时代
新增定义：
引入：import
导出：export

模块在引入、导出和定义的地方：
```js
  // 引入区域
  import dependencyModule1 from './dependencyModule1';
  import dependencyModule2 from './dependencyModule2';

  // 实现业务逻辑……
  // 导出
  export const increase = () => ++count;
  export const reset = () => {
    count = 0;
  }
  
  export default {
    increase, reset
  }
```

** 面试：1. 性能 - 按需加载 2.动态模块
ES11原生解决方案
```js
  import('./esModule.js').then(dynamicModule => {
    dynamicModule.increase();
  })
``` 

> * 优点（重要性）：通过一种最终统一各端的形态，整合了js模块化的通用方案
* 局限性：本质上还是运行时的依赖分析

### 解决模块化的新思路 - 前端工程化
#### 遗留
根本问题 - 运行时进行依赖分析

解决方案 - 线下执行

追问：可否简述，实现一个编译时依赖处理的思路
```js
<！doctype html>
  <script src="main.js"></script>
  <script>
    // 给构建工具一个标识位
    require.config(__FRAME_CONFIG__);
  </script>
  <script>
    require(['a', 'e'], () => {
      // 业务逻辑
    })
  </script>
</html>

define('a', () => {
  let b = require('b')
  let c = require('c')
})
```

##### 工程化实现
step1: 扫描依赖关系表
```js
  {
    a：['b', 'c'],
    b: ['d'],
    e: []
  }
```

step2: 根据依赖关系重制模板
```js
<！doctype html>
  <script src="main.js"></script>
  <script>
    // 构建工具生成数据
    require.config({
      "deps": {
        a：['b', 'c'],
        b: ['d'],
        e: []
      }
    });
  </script>
  <script>
    require(['a', 'e'], () => {
      // 业务逻辑
    })
  </script>
</html>

define('a', () => {
  let b = require('b')
  let c = require('c')
})
```

step3: 执行工具，采用模块化解决方案处理
```js
  define('a', ['b', 'c'], () => {
    export.run = () => {}
  })
```
> 优点：
1. 构建时生成配置，运行时去运行
2. 最终转化成可执行的依赖处理
3. 可以拓展

#### 完全体 webpack为核心的前端工程化 + mvvm框架的组件化 + 设计模式


#########################################################
### async await & generator
```js
// 1. async await
function wait500(input) {
    return new Promise((resolve, reject) => {
      console.log('wait500', input)
      setTimeout(() => {
        resolve(input + 500)
      }, 500);
    });
}

wait500.then(res => {
  wait500.then(res => {
    wait500.then(res => {
      wait500.then(res => {
      })
    })
  })
})

async function asyncCall() {
  const result = await wait500(0);
  result = await wait500(0);
  result = await wait500(0);
  result = await wait500(0);
  
  console.log('asyncCall', result);
}

asyncCall();

// 2. generator 步进代替then
function* generator() {
  let index = 0;
  while(true) yield index++;
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 面试重点 - 结合流水线做自动化处理
const GEN_LINE = [1, 2, 3, 4, 5, 6]
(GEN_LINE || []).forEach(it => {
  console.log(gen.next(it).value);
})
```

