//
function hello (){
    console.log("hello world");
}
// hello();

// const hello = {key:"rahul"}


// javascript function ==> function + object

// console.log(hello.name);

// you can add your own properties

// hello.myOwnProperty = " very unique value";
// console.log(hello.myOwnProperty)

// name property ---> tells function name;

// function provides more usefull properties.

// {}
console.log(hello.prototype); // {}

// only functions provide prototype property


// if(hello.prototype){
//     console.log("proptotype is present")
// }else{
//     console.log("prototype is not present")
// }


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return " lalalala";
}
console.log(hello.prototype.sing())



















