// event object

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click",function(abc){
//     console.log(abc);
// })

// jab bhi mai kisi bhi element pe event listner add hoga 
// js engine ----> line by line execute
// browser ----> js engine +extra feature
// browser ----> js engine + webApi

// jab browser ko pata chala user ne event perform kiya jo hum listen kar rahe hai 
// browser 2 kam karega first kam ye karega ke jo callback function hai vo js engine do degi execute karne ke liye or jo second call back function ke sath browser jo event hua hai uski information bhi dega

// ye information hame ek object ke form me milege


const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        
        console.log(e.target)
        console.log(e.currentTarget)
        
    })
}





















