// call back functions
// function take argument as function in side the function we call the second function

function myFunc2(name){
    console.log("inside my func2")
    console.log(`your name is ${name}`)
}

function myFunc(callback){
    console.log("hello there I am a func and I can ...")
    callback("rahul");
}


myFunc(myFunc2);


// also called as higher order function 