// rest parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9);

function addAll(...c){
    let total = 0;
    for (let element of c){
        total += element
    }
    return total
}

console.log(addAll(3,4,5,6,7,8,9));















