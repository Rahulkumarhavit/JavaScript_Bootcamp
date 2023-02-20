// 2015 / es 6
// class keyword
// class are fake 


class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("consturctor called")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`

    }
    is18(){
        return this.age >=18;

    }
    sing(){
        return 'toon na na na la la';
    }
    func(a){
        console.log(a);
    }
}


const user1 = new CreateUser("rahul","kumar",'rahulkumar@gmail.com',18,"my address");
const user2 = new CreateUser("hasrhit","kumar",'rahulkumar@gmail.com',8,"my address");
const user3 = new CreateUser("mohit","kumar",'rahulkumar@gmail.com',18,"my address");
console.log(user1);
console.log(user1.sing());
console.log(user1.is18());
user1.func(15)
console.log(Object.getPrototypeOf(user1));