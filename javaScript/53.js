// parameter  destructuring

// object 
// react

const perosn = {
    firstName : "rahul",
    gender : "male",
    age : 50

}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(perosn)
















