// closure example

// function myFunction(power){
//     return function square(b){
//         return b**power;

//     }
// }

// const ans = myFunction(3);
// console.log(ans(3))


// arrow function
const  myFunction = (power) =>{
    return square = (b) =>{
        return b**power;

    }
}

const ans = myFunction(3);
console.log(ans(3))