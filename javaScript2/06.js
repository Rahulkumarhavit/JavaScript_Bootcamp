// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function(){
    const firstName = "rahul";
    function myFunction(){
        console.log(firstName)
        console.log(lastName)
    }
    myFunction()
}

printName();











