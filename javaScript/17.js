// nested if else

let WinningNumber = 19;

let userGuess = +prompt("Guess a number");

if(userGuess === WinningNumber){
    console.log("your guess is right")
}else{
    if(userGuess < WinningNumber){
        console.log("too low !!!")
    }else{
        console.log("too High !!!")
    }
}

