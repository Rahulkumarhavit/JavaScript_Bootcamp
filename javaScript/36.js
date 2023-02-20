// objects -> reference data types
// arrays are goood but not sufficient
// for real world data 
// objects store key value pairs
// objects don't have index


// how to create objects

const person = {
    name:"rahul",
    age:22,
    hobbies :["guitar","sleeping","listening music"]
}

console.log(person);
console.log(typeof person);

// how to access data form objects
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// console.log(person["name"])
// console.log(person["age"])


// how to add key value pair to objects
// person.gender = "male";
// console.log(person)

person["gender"] = "male";
console.log(person)

