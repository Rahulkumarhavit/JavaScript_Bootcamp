// closures
// function can return functions



// function outerFunction(){
//     function innerFunction(){
//         console.log("hello World");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// ans();




function printFullName(firstName,lastName){
    function printName(){
        console.log(arguments)
        console.log(firstName,lastName);
    }
    return printName;
}

const ans = printFullName("rahul","kumar");
ans();

