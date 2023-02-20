// every method

// const numbers = [2,4,6,8,10];

// function isEven (number){
//     return number %2 ===0;
// }

// const ans = numbers.every((number)=>number %2===0);
// console.log(ans);

// call back function ----> true / false (boolean)
// every method ---- > true / false (boolean)
  


// every method check karega ke every element of an array has to satisfy the given condition then it give the true other wise it give the false


const userCart = [
    {productId : 1, productName : "mobile",price : 12000},
    {productId : 2, productName : "laptop",price : 22000},
    {productId : 3, productName : "tv",price : 15000},
]

// check the price of every item is less than 30000

const ans1 = userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans1)














