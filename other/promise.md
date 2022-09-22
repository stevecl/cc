## promise 解析
* 啥是异步
```js
    // 异步执行
    let count = 1
    let timer = setTimeout(() => {
        count++
        console.log('in', count)
    }, 1000)
    console.log('out', count)

    // 循环执行 + 终止
    let count = 1
    let timer = setInterval(() => {
        count++
        console.log('in', count)
    }, 1000)
    console.log('out', count)

    setTimeout(() => {
        clearInterval(timer)
        console.log('in', count)
    }, 5000)

    // 看不见的队列，存放着他需要默默执行的命令
```

### 1. 进程和线程
#### a. 概念与区别 - 参考图
> 进程是CPU资源分配的最小单位，线程是CPU调度的最小单位

#### b. 面试题：
* 映射到前端：浏览器。chrome新开一个窗口，tab页是进程还是线程？ - 进程，从区别概念上出发
* 发散：
方向一：窗口（进程间）通信？浏览器的存储 - storage、cookie => 多种存储的区别
方向二：浏览器原理（中高级岗位居多）- 参考图

### 2. EVENT-LOOP
#### a. 执行栈
* JS单线程语言，单步执行
```js
    function run() {
        func1()
    }
    function func1() {
        func2()
    }
    function func2() {
        throw new Error('plz check ur call stack')
    }
    run()
```
#### b. 面试题
* JS堆栈的执行顺序与堆栈溢出  => 性能优化
```js
    function func() {
        func()
    }
    func()
```
* 执行顺序题
```js
setTimeout(() => { // 异步 macro
    console.log('Time out')
})

Promise.resolve(1).then(() => { // micro
    console.log('promise')
})

console.log('hi') // 同步 macro
// h p t
// 追问：思考
```

### promise
#### a. 理论
```js
    // 1. 写一个异步定时
    setTimeout(() => {
        console.log('Time out')
    }, 2000)
    // 2. 写一个异步请求
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            const _status = request.statue
            if (_status === 200) {
                const _res = request.responseText
                return success(_res)
            } else {
                return fail(_status)
            }
        }
    }
    // 3. 延时后再请求
    setTimeout(() => {
        console.log('Time out')
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                const _status = request.statue
                if (_status === 200) {
                    const _res = request.responseText
                    return success(_res)
                } else {
                    return fail(_status)
                }
            }
        }
    }, 2000)
    // 4. 再延时再请求？- 回调地狱
    setTimeout(() => {
        console.log('Time out')
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                const _status = request.statue
                if (_status === 200) {
                    const _res = request.responseText
                    setTimeout(() => {
                        console.log('Time out')
                        request.onreadystatechange = () => {
                            if(request.readyState === 4) {
                                const _status = request.statue
                                if (_status === 200) {
                                    const _res = request.responseText
                                    return success(_res)
                                } else {
                                    return fail(_status)
                                }
                            }
                        }
                    }, 2000)
                    return success(_res)
                } else {
                    return fail(_status)
                }
            }
        }
    }, 2000)

    // 5. promise的出现，拯救了回调导致的无穷嵌套
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK')
        }, 1000)
    }).then(r => {
        console.log('then: ' + r)
    }).catch(err => {
        console.log('catch: ' + err)
    })

    // 6. 多个异步顺序执行 => 链式调用
    function wait500(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(input + 500)
            }, 500)
        })
    }
    function wait1000(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(input + 1000)
            }, 1000)
        })
    }
    const p = new Promise((resolve, reject) => {
        resolve(1)
    })
    p.then(wait500)
    .then(wait1000)
    .then(wait500)
    .then(wait1000)
    .then(result => {
        console.log('end' + result)
    })

    // 7.全部执行完成后再操作
    Promise.all([wait500, wait1000]).then(result => {
        console.log('all end', result) // [f,f,f,f]
    })

    // 8. 一旦有执行完成的，立刻操作
    Promise.race([wait500, wait1000]).then(result => {
        console.log('race end', result) // f
    })

    // all和race返回值问题
```

#### b. 面试题
描述promise框架 - 规范
* 1. promise有哪些状态？对应值有哪些 - pending、fulfilled、rejected
* 2. new Promise 执行器executor()，执行器参数是？ - resolve、reject
* 3. promise的默认状态是？promise状态的流转？ - 默认pending，pf，pr
* 4. promise，value保存成功状态的枚举？- undefined/thenable/promise
* 5. promise，失败状态值？- reason保存失败
描述promise接口
* 6. promise一定会有then，then接收来源？
- 两个回调onFulfilled(value) + onRejected(reason)

```js
    // 三个状态：PENDING FULFILLED REJECTED
    const PENDING = 'PENDING'
    const FULFILLED = 'FULFILLED'
    const REJECTED = 'REJECTED'

    class Promise { // 类
        constructor(executor) { // 构造
            // 默认状态的处理: PENDING
            this.status = PENDING

            // 成功状态的值
            this.value = undefined
            // 失败状态的值
            this.reason = undefined

            // 成功状态的回调
            let resolve = value => {
                if (this.status === PENDING) {
                    this.status = FULFILLED
                    this.value = value
                }
            }

            // 失败状态的回调
            let reject = reason => {
                if (this.status === PENDING) {
                    this.status = REJECTED
                    this.reason = reason
                }
            }
            
            try {
                executor(resolve, reject)
            } catch (error) {
                reject(error)
            }
        }

        then(onFulfilled, onRejected) {
            if (this.status === FULFILLED) {
                onFulfilled(this.value)
            }

            if (this.status === REJECTED) {
                onRejected(this.reason)
            }
        }
    }
    
    const promise = new Promise((resolve, reject) => {
        resolve('成功')
    }).then(data => {})
    .catch(err => {})

    // 异步
    // 区别 - 依次调用
    class Promise { // 类
        constructor(executor) { // 构造
            // 默认状态的处理: PENDING
            this.status = PENDING

            // 成功状态的值
            this.value = undefined
            // 失败状态的值
            this.reason = undefined

            // 存放成功的回调
            this.onResolvedCallbacks = []
            // 存放失败的回调
            this.onRejectedCallbacks = []

            // 成功状态的回调
            let resolve = value => {
                if (this.status === PENDING) {
                    this.status = FULFILLED
                    this.value = value

                    // 依次调用对应函数的执行
                    (this.onResolvedCallbacks || []).forEach(fn => fn())
                }
            }

            // 失败状态的回调
            let reject = reason => {
                if (this.status === PENDING) {
                    this.status = REJECTED
                    this.reason = reason

                    // 依次调用对应函数的执行
                    (this.onRejectedCallbacks || []).forEach(fn => fn())
                }
            }

            try {
                executor(resolve, reject)
            } catch (error) {
                reject(error)
            }
        }

        then(onFulfilled, onRejected) {
            if (this.status === FULFILLED) {
                onFulfilled(this.value)
            }

            if (this.status === REJECTED) {
                onRejected(this.reason)
            }

            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    onFulfilled(this.value)
                })
                this.onRejectedCallbacks.push(() => {
                    onRejected(this.reason)
                })
            }
        }
    }

    // 启示：同步 => 异步
    // 顺序和空间的关系
```


