// Maps 
// map is an iterable 

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects 
// objects can only have stirng or symbol as key

// in maps you can use anything as key
// like array , number , string

// object literal 
// key -> string
// key -> symbol

// const person = {
//     firstName : "harshit",
//     age : 7,
//     1 : "one"
// }
// console.log(person.firstName);
// console.log(person['firstName']);

// for(let key in person){
//     console.log(typeof key)
// }


// key value pair 
// const newPerson = new Map();
// newPerson.set("firstName","rahul");
// newPerson.set("age",7);
// newPerson.set(1,'one');
// newPerson.set([1,2,3,4],'onetwothreefour');
// newPerson.set({1:'one'},'onetwothree');

// console.log(newPerson);

// console.log(newPerson.get("firstName"));
// console.log(newPerson.get(1));
// console.log(newPerson.keys());


// for(let key of newPerson.keys()){
//     console.log(key, typeof key)
// }

// for(let [key,value] of newPerson){
//     // console.log(Array.isArray(key));
//     console.log(key,value)
// }

const person1 = {
    id:1,
    firstName : 'harshit'
}
const person2 = {
    id:2,
    firstName : 'harshta'
}
const extraInfo = new Map();
extraInfo.set(person1, {age:8,gender :'male'})
extraInfo.set(person2, {age:9,gender :'female'})
console.log(extraInfo)

console.log(person1.id)
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);


// const perosn = new Map([['firstName','harshit'],['age',7]])
// console.log(perosn)
