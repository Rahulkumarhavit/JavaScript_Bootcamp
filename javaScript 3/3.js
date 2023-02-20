// understand callback

// function myFunc(callback){
//     console.log("function is doing task 1");
//     callback()
// }

// function myFunc2(){
//     console.log("function is doing task 2")
// }
// myFunc(myFunc2);

// myFunc(() =>{
//     console.log("function is doing task 2")
// });


function getTwoNumbersADD(num1,num2,onSuccess,onError){
    if (typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1,num2);
    }else{
        onError();
    }
}
// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
getTwoNumbersADD(3,4,(num1,num2)=>{
    console.log(num1+num2)
},()=>{
    console.log("wrong data type")
    console.log("please pass number only")
});









































