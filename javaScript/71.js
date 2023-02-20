// methods
// function inside object 


const person = {
    firstName : "rahul",
    age : 8,
    about : function(){
        console.log(this)
        console.log(`person name is ${this.firstName} and person age is ${this.age} `)
    }
};

// person.about();
// this means object or ham us object me se key use karke value le sakte hai

// ------------------------------------------

function PersonInfo(){
    console.log(` person name is ${this.firstName} and age is ${this.age}`);

}

const person1={
    firstName : "rahul",
    age : 18,
    about : PersonInfo

}

const person2={
    firstName : "prince",
    age : 16,
    about : PersonInfo

}

const person3={
    firstName : "aditya",
    age : 14,
    about : PersonInfo

}

person1.about();
person2.about();
person3.about();













