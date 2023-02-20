// getter and setters

class Person {
    constructor(firstName,LastName,age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    // setName(firstName,LastName){
    //     this.firstName = firstName;
    //     this.LastName = LastName;
    // }
    set fullName(fullName){
        const [firstName,LastName] = fullName.split(" ")
        this.firstName = firstName;
        this.LastName = LastName;
    }
}

const person1 = new Person("harshit","sharma",14)
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.LastName);
// person1.setName("mohit","vashistha");
// console.log(person1.firstName);
// console.log(person1.LastName);

// // or 
// person1.firstName = "mohit";
// person1.LastName = "vahis"
// console.log(person1.firstName)
// console.log(person1.LastName)

person1.fullName = "ranjan mohit"
console.log(person1.fullName)



