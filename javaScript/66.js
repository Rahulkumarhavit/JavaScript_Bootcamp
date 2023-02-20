// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable



const firstName = 'rahul';
for(let char of firstName){
    console.log(char);
}

// const items = ['item1','item2','item3'];
// for (let item of items){
//     console.log(item)
// }

// object are not iterable
const users = {
    'key1':'value1',
    'key2':'value2',
}
// for(let item of users){
//     console.log(item)
// }

// array like object
// jinke pas length property hoti hai
// auro jiko hum index se access kar sakte hai
// example : - string

const firstName2 = "rahul";
console.log(firstName2.length)
console.log(firstName2[2])
