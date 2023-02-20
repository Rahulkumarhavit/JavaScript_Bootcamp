// important array methods

// forEach 
// map 
// filter
// reduce

const numbers = [4,2,5,8];


// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);


// for (let i = 0;i<numbers.length;i++){
//     myFunc(numbers[i],i)
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// });

// exercise 
// numbers.forEach(function(number){
//     console.log(`final answer ${number*2}`)
// })

const users = [
    {firstName : "rahul",age:33},
    {firstName : "mohit",age:21},
    {firstName : "nitish",age:22},
    {firstName : "garima",age:20},
]

// users.forEach(function(user){
//     console.log(user.firstName)
// })

// arrow function
users.forEach((user) =>{
    console.log(user.firstName)
});