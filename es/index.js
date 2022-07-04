// arguments.callee  当前函数对象，匿名函数的递归调用

// const Person = function (age, name, ...rest) {
//     this.name = name
//     this.age = age
//     let obj = { '0': 18, '1': 'cc', '2': 2, '3': 4 }
//     obj.length = 5
//     console.log(Array.prototype.slice.call(obj, 2))
//     console.log(arguments)
// }

// const p = new Person(18, 'cc', 2, 4)

class Person {
    get age () {
        return this._age
    }
    set age (val) {
        this._age = val
    }
}

let test = {
    name: 'cc'
}

let testProxy = new Proxy(test, {
    get (target, propKey, receiver) {
        console.log('get', target, propKey, receiver)
        return Reflect.get(target, propKey)
    },
    set (target, propKey, value, receiver) {
        console.log('set', target, propKey, value, receiver)
        return Reflect.set(target, propKey, value, receiver)
    }
})

console.log(testProxy.name = 'chenglian')
console.log(testProxy.name)