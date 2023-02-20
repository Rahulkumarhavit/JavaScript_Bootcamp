// static methods and properties

class Person {
    constructor(firstName,LastName,age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    static classInfo(){
        return 'firstName is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    set fullName(fullName){
        const [firstName,LastName] = fullName.split(" ")
        this.firstName = firstName;
        this.LastName = LastName;
    }
    eat(){
        return `${this.firstName} is eating`
    }
}


const person1 = new Person("rahul","kumar",8);
console.log(person1.eat());
const ans = Person.classInfo();
console.log(ans);
console.log(Person.desc);



