// map method

const numbers = [3,4,5,6,7,8]
function square (number){
    return number*number;
}
// console.log(numbers.map(square));
 

// const squreNumber = numbers.map((number,index) => {
//     return `index : ${index} , ${number *number}` ;
// }); 
// console.log(squreNumber);


const users = [
    {firstName : "rahul",age:33},
    {firstName : "mohit",age:21},
    {firstName : "nitish",age:22},
    {firstName : "garima",age:20},
]

    
const userNames = users.map((user)=>{
    return user.firstName;
})
// console.log(userNames)













