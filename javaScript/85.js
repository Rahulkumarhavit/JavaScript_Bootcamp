// let numbers = [1,2,3];
// let numbers = new Array(1,2,2)
// console.log(Array.prototype)
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

function hello(){
    console.log("hello");
}
// prototype
// console.log(hello.prototype)
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);






