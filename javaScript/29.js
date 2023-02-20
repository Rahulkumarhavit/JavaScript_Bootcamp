// how to clone array

// how to concatenate array

// let array1 = ["item1","item2"];
// let array2 = array1;

// console.log(array1 === array2);
// let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];
// array1.push("item3");
// console.log(array1 === array2);

// method to clone array:-

// method 1
// let array1 = ["item1","item2"];
// let array2 = array1.slice(0)  // clone array
// console.log(array1 === array2);
// method 2
// let array1 = ["item1","item2"];
// let array2 = [].concat(array1);
// console.log(array1 === array2);
// method 3 new way  spread operator
// let array1 = ["item1","item2"];
// let array2 = [...array1];
// console.log(array1 === array2);


// slice is faster in performance 

// new way to concat more item in array 
// let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item3","item4"]);
// let array2 = [].concat(array1,[ "item3", "item4"]);
// let array2 = [...array1,"item3","item4"];

// spread operator ***

// console.log(array2);