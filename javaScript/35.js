// array destructuring

const myArray = ["value1","value2","value3","value4","value5","value6"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of my var1",myvar1);
// console.log("value of my var2",myvar2);

let [myvar1,myvar2,,myvar3,...myNewarray] = myArray;
myvar1 = "valuechanged"
console.log("value of my var1",myvar1);
console.log("value of my var2",myvar2);
console.log("value of my var3",myvar3);


// let myNewarray = myArray.slice(2);
console.log(myNewarray);





