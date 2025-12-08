//  selecting required elements
var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var todoList = document.getElementById("todoList");
//  adding event listener
addBtn.addEventListener("click", function () {
    var li = document.createElement("li");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    deleteBtn.classList.add("delete-btn");
    li.innerText = todoInput.value;
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
    });
});
