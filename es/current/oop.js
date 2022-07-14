class Food {
    cooked() {
        if(this.type) {
            console.log(`make the ${this.type} can be eat`)
        } else {
            console.error('should ensure food');
        }
    }
    eat() {
        console.log('eating food');
    }
}
class Pork extends Food {
    constructor() {
        super();
        this.type = 'pork';
    }
}

class Vegetable extends Food {

}

class Person {

}
class Chief extends Person {
    cook(meat) {
        meat.cooked();
    }
}
class Consumer extends Person {
    eat(food) {
        // todo
        food.eat();
    }
}

const chief = new Chief();
const consumer = new Consumer();
const recookMeat = new Pork();
chief.cook(recookMeat);
consumer.eat(recookMeat);

// 类和对象

class Car extends Object {
    // speed, monkey， 排量
    // drive, bug sell
}
class MockCar extends Object {

}
// 动物。为什么动物，


let myCar = new Car();

