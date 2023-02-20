// filter method

const numbers = [1,3,2,6,4,8];
// function isEven (number){
//     return number %2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers)


const evenNumbers2 = numbers.filter((number) => {
    return number %2 ===0;
});
console.log(evenNumbers2)











