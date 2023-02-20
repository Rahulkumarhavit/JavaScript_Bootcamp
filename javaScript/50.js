// block scope vs function scope


// let and const are block scope 
// var is function scope

{
    let firstName = "harshit";
    console.log(firstName)
}

{
    const firstName = "Rahul";
    console.log(firstName)
    
}
{
    var firstName = "Rohit";
}
console.log(firstName)



