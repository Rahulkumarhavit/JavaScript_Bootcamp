// function

// console.log("happy birthday to you .....");

function singHappyBirthday(){
    console.log("happy birthday to you ......")
}

singHappyBirthday();

// function twoPlusFour(){
//     console.log(2+4)
// }
// twoPlusFour();

// call invoke run are same thing

// function sumTwoNumber(number1,number2){  // parameter
//     return number1+number2
// };
// console.log(sumTwoNumber(4,5)); // argument

// console.log(2+3 +undefined)

// function isEven (number){
//     if(number % 2 ==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(6))
// function isEven (number){
//     if(number % 2 ==0){
//         return true;
//     }
//     return false;
    
// }

// console.log(isEven(5))

// function isEven (number){
//     return number % 2 ===0;
    
// }

// console.log(isEven(5))

// function
// input string 
// output firstcharacter

// function firstChar(anyString){
//     return anyString[0]
// };
// console.log(firstChar("avc"))

// input Array, target(number )
// output index of target if target present in array 

// [1,2,2,3,3,4,54] 9
function arrayIndex(arr,var1){
    for (let i=0;i<arr.length;i++){
        if(arr[i] ===  var1){
            return i;
        }
    }
    return -1

}
console.log(arrayIndex([1,3,4,5,7,54],4))