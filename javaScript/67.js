// sets (it is iterable)
// store data
// sets also have its own method
// no index based access
// order is not guaranteed
// unique items only (no duplicates are allowed in set)
const items = ['item1','item2']
const numbers = new Set([1,2,3,4,5,6]);
numbers.add(1);
numbers.add(items);
numbers.add(['item5','item7']);
numbers.add(['item5','item7']);

console.log(numbers)

// check the element present in set return true 
// if (numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }

for (let item of numbers){
    console.log(item)
}


const myArray = [1,2,2,3,3,4,23,2,3,323,3,2];
const uniqueElement = new Set(myArray);
console.log(uniqueElement)
let length = 0
for (let element of uniqueElement){
    length ++;
}
console.log(length)
