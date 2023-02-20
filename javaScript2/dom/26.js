// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild


const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceNode = document.querySelector(".first-todo")

li.textContent = "new todo";
// ul.appendChild(li);
ul.insertBefore(li,referenceNode)







































