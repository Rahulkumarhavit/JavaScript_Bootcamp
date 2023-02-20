// function hello(){
//     console.log("hello world");
// }

// hello.call();
// call apply bind

function about (hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

const user1 = {
    firstName : "rahul",
    age : 8,
    
}
// user1.about();
const user2 = {
    firstName : "mohit",
    age : 9,
    
}

about.call(user1,"guitar","mozart");
about.apply(user1,["guitar","bach"]);
const func = about.bind(user2,"guitar","bach");
func();

// apply






















