// callbacks, callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent = "heading1"
//     heading1.style.color = "violet"
//     setTimeout(()=>{
//         heading2.textContent = "two"
//         heading2.style.color = "cyan"
//         setTimeout(()=>{
//             heading3.textContent = "three"
//             heading3.style.color = "green"
//             setTimeout(()=>{
//                 heading4.textContent = "four"
//                 heading4.style.color = "red"
//                 setTimeout(()=>{
//                     heading5.textContent = "five"
//                     heading5.style.color = "blue"
//                 },1000)
//             },1000)
//         },1000)
//     },1000);
// },1000);

function changeText(element, text, color,time,onsuccesscallback,onfailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onsuccesscallback){
                onsuccesscallback();
            }
        }else{
            if(onfailureCallback){
                onfailureCallback();
            }  
        }
    },time)
}
changeText(heading1,"one","violet",3000,()=>{
    changeText(heading2,"two","pink",2000,()=>{
        changeText(heading3,"three","blue",1000,()=>{
            changeText(heading4,"four","cyan",1000,()=>{
                changeText(heading5,"five","black",1000,()=>{
                    changeText(heading6,"six","aqua",2000,()=>{
                        changeText(heading7,"seven","red",1000,()=>{

                        },()=>{console.log("heading1 does not exist")})
                    },()=>{console.log("heading1 does not exist")})
                },()=>{console.log("heading1 does not exist")})
            },()=>{console.log("heading1 does not exist")})
        },()=>{console.log("heading1 does not exist")})
    },()=>{console.log("heading1 does not exist")})
},()=>{console.log("heading1 does not exist")})












