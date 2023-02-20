// arrow functions

const user1 = {
    firstName : "rahul",
    age : 8,
    about : ()=>{
        
        console.log(this.firstName, this.age);
    }
}

user1.about();

// arrow function me this nahi hota hai wo this apne surrounding se leta hai

// arrow function me this window hota hai ek level up


















