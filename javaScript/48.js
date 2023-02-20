// functions inside functions

const app = () =>{
    const myFunc = () =>{
        console.log("hello from my func")
    }
    const addTwo = (num1,num2) => {
        return num1+num2
    }
    const mul = (num1,num2) => num1 *num2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(3,4));
    console.log(mul(3,4));
};
app();
