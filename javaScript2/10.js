// closure example

function called(){
    let total = 0
    return function(){
        if (total <1){
            console.log("hi, you called Me !!")
            total++;
        }else{
            console.log("mai ek bar call ho chuka ho")
        }
    }    
}
const ans = called();
ans()

