// lexical scope
const myVar = "value1";
function myApp(){
    

    function myFunc (){
        // const myVar = "value59";
        const myNewFunc = () =>{
            console.log("inside my func", myVar);
        }
        myNewFunc();
        
    }

    const myFunc2 =()=>{}
    const myFunc3 = function(){}
    console.log(myVar);
    myFunc();
}
myApp();
