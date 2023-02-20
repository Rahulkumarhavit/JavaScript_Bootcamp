// little practice with click event

const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.color = "blue";
        e.target.style.backgroundColor = "grey";
        // console.log(e.currentTarget.textContent,num);
    })
})













































