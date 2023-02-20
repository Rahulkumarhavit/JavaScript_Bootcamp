// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     sing : function(){
//         return 'toon na na na la la';
//     }
// }

function createUser(firstName,lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

createUser.prototype.about =  function(){
            return `${this.firstName} is ${this.age} years old`
        };
createUser.prototype.is18 = function (){
    return this.age >=18;
}
createUser.prototype.sing = function (){
    return 'toon na na na la la';
}


const user1 = createUser("rahul","kumar",'rahulkumar@gmail.com',18,"my address");
const user2 = createUser("hasrhit","kumar",'rahulkumar@gmail.com',8,"my address");
const user3 = createUser("mohit","kumar",'rahulkumar@gmail.com',18,"my address");
console.log(user1);
console.log(user1.sing());
console.log(user2.is18());


