// how to iterate objects

const person = {
    name:"rahul",
    age:22,
    "person hobbies" :["guitar","sleeping","listening music"]
}

// for in loop 
// Object.keys

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

console.log(Object.keys(person));
console.log(Object.values(person));
const val1 = Array.isArray((Object.keys(person)));
console.log(val1);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }


