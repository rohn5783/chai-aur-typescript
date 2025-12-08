//  selecting required elements
const todoInput = document.getElementById("todoInput") as HTMLInputElement;

const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

const todoList = document.getElementById("todoList") as HTMLUListElement;

//  adding event listener

addBtn.addEventListener("click",function(){
let li = document.createElement("li");
let deleteBtn = document.createElement("button")
deleteBtn.innerHTML = "delete"
deleteBtn.classList.add("delete-btn")
li.innerText = todoInput.value
li.appendChild(deleteBtn)

todoList.appendChild(li);
todoInput.value = "";


deleteBtn.addEventListener("click", function(){
    todoList.removeChild(li)
})
})