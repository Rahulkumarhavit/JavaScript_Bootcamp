const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
    // __ proto __
    // official ecmascript documentation
    // [[prototype]]
    // __proto__, [[prototype]]
    // proto is a reference of chain that you created

    // prototype
    // prototype is simple a object


const obj2 = Object.create(obj1);
// there is one more way to create empty object 
obj2.key3 = "value2";
// obj2.key2 = "unique"
console.log(obj2)


console.log(obj2.key2)
// this is happening

console.log(obj2.__proto__);