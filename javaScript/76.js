// short syntax

// const user1 = {
//     firstName : "rahul",
//     age : 8,
//     about : ()=>{
        
//         console.log(this.firstName, this.age);
//     }
// }

const user1 = {
    firstName : "rahul",
    age : 8,
    about(){
        console.log(this.firstName, this.age);
    }
}

user1.about();









