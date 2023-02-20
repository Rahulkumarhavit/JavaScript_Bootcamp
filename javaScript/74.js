const user1 = {
    firstName : "rahul",
    age : 8,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake
user1.about();
const myFunc = user1.about.bind(user1);
myFunc();


