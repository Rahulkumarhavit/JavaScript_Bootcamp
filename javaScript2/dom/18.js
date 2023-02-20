// loop
// array like objects ----> indexing, length property
// const navItems = document.getElementsByTagName("a"); // give html 
// collection
// console.log(navItems);
// we can't use for each method to iterate through html collection
// simple for loop 
// for of loop 
// for each 

// console.log(navItems.length)

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem=navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for each is not applicable first convert to array then use 
// let navItems = document.getElementsByTagName("a"); // give html 

// navItems = Array.from(navItems);

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })





// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll(".nav-item"); // Node list
// console.log(navItems[2]);



let navItems = document.querySelectorAll("a");
// console.log(navItems)

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem=navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })






