// sort method


// const numbers = [5,9,1200,400,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// numbers.sort((a,b)=>a-b)
// console.log(numbers);

// 1200,400
// a-b ---> 800
// a-b ---> positive (greater than 0) ---> b,a
// 400, 1200

// a-b ----> negative ---> a,b
// 5,9 ----> -4


// flipkart  lowToHigh HighToLow

const products =[
    {productId : 1, productName :"p1",price : 300},
    {productId : 2, productName :"p2",price : 3000},
    {productId : 3, productName :"p3",price : 200},
    {productId : 4, productName :"p4",price : 8000},
    {productId : 5, productName :"p5",price : 500},
]

//low to high

const lowtoHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
})
console.log(lowtoHigh)

const hightolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price
})
console.log(hightolow)












// const userNames = ['harshit','abcd','mohit','nitish','ABC','Harshit'];
// userNames.sort();
// console.log(userNames);


















