class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return ` ${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

// const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

// dog class

class Dog extends Animal{

    
}

const tommy = new Dog("tommy",3);
console.log(tommy.isCute());

// animal hai base clas or dog hai sub class ,
// sub class banta hai extends ko use karke
// jo property dog class me nahi hai usko animal class me dekhenge


