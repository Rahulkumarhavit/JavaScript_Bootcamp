// splice method
// start , delete, insert

const myArray = ['item1','item2','item3'];
// delete
const deletedItem = myArray.splice(1,1);
console.log(deletedItem)

// insert 
myArray.splice(1,0,"inserted Item")

// insert and delete

myArray.splice(1,2,"inserted1","inserteditem2")

console.log(myArray);





