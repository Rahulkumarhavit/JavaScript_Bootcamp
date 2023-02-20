function CreateUser(firstName,lastName,email,age,address){

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about =  function(){
            return `${this.firstName} is ${this.age} years old`
        };
CreateUser.prototype.is18 = function (){
    return this.age >=18;
}
CreateUser.prototype.sing = function (){
    return 'toon na na na la la';
}

const user1 = new CreateUser("rahul","kumar",'rahulkumar@gmail.com',18,"my address");
const user2 = new CreateUser("hasrhit","kumar",'rahulkumar@gmail.com',8,"my address");
const user3 = new CreateUser("mohit","kumar",'rahulkumar@gmail.com',18,"my address");
// console.log(user1);
// console.log(user1.sing());
// console.log(user1.is18());

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

