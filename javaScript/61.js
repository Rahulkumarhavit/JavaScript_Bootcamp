// find method

const myArray = ["hello","cat ","dog","lion"];

function isLength(anyString){
    return anyString.length === 3;
}

const ans = myArray.find(isLength);
console.log(ans)


// const ans1 = myArray.find((string) => string.length===3);
// console.log(ans1)

const users =[
    {userId : 1, userName : "harshit"},
    {userId : 2, userName : "harsh"},
    {userId : 3, userName : "nitish"},
    {userId : 4, userName : "mohit"},
    {userId : 5, userName : "aidtya"},
];
// const ans3 = users.find( (obj)=>obj.userId===3);
// console.log(ans3)
