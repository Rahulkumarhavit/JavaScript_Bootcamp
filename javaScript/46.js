// arrow functions

function singHappyBirthday(){
    console.log("happy birthday to you ....");
};

const singHappyBirthday2 = function(){
    console.log("happy birthday to you .....");
};

const singHappyBirthday3 = () => {
    console.log("happy birthday to you .....");
};

singHappyBirthday3();

function sumThreeNumbers(number1,number2,number3){
    return number1 +number2+number3;
}

console.log(sumThreeNumbers(3,4,4));
const sumThreeNumbers2 = function(num1,num2,num3){
    return num1+num2+num3;
}
const sumThreeNumbers3 = (num1,num2,num3) => {  //arrow function
    return num1+num2+num3;
}
console.log(sumThreeNumbers2(3,2,1));

// const isEven = number => {
//     return number %2 ===0;
// };
// console.log(isEven(6))

const isEven2 = number => number % 2===0;
console.log(isEven2(7))

const firstChar = (anyString) => {
    return anyString[0];
};
console.log(firstChar("rahul"))
