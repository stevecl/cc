### 笔记

## vite  npm create vite@latest


#### 
1. 进行dns解析，拿到IP，解析dom生成dom tree, 解析css 拿到 cssom树，

遇到link标签和style代码，才会加载css，从右向左解析
js会阻塞css和dom的渲染，async （异步加载，立即执行）和 defer （异步加载，延迟执行）
因为js主要作用是修改（操作）dom，会导致页面重绘（颜色）和回流（重排，几何属性变化）

```js
var aa = {
  num: 1,
  list: [1, 2, 3]
}

var s = aa.num
var list = aa.list

s = 2
list.push(4)
```


```js
Object.prototype.test = 2

// var obj = Object.create(null)
var obj = {}
obj.a = 100

var arr = [1,2]
arr.a = 100

function fn(){

}

fn.a = 100

// console.log(obj, arr, fn)
// console.log(obj, arr, fn.prototype)
console.log(obj.__proto__, arr.__proto__, fn.__proto__)
console.log(fn.toString())

```