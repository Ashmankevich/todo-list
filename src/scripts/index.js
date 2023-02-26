import { getDate } from "./date";
import { btnAdd, btnDeleteAll, listTodo } from "./components.js";

let allTasks;

localStorage.allTasks === allTasks
  ? (allTasks = [])
  : (allTasks = JSON.parse(localStorage.getItem("allTasks")));

function updateLocalStorage() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

function getTask(description) {
  this.description = description;
  this.isChecked = false;
  this.id = Date.now();
}

btnAdd.addEventListener("click", (obj) => {
  const wrapperTodoItem = document.createElement("li");
  wrapperTodoItem.className = "wrapper todo-item";
  listTodo.append(wrapperTodoItem);

  const textTodo = document.createElement("input");
  textTodo.className = "todo-input";
  textTodo.classList.add("complete"); //change it, try - toggle
  textTodo.setAttribute("placeholder", "Todo text..."); // why placeholder is empty??
  textTodo.setAttribute("type", "checkbox");
  textTodo.setAttribute("isChecked", obj.isChecked);
  wrapperTodoItem.append(textTodo);

  const wrapperCloseAndDate = document.createElement("div");
  wrapperCloseAndDate.className = "wrapper todo-close";
  wrapperTodoItem.append(wrapperCloseAndDate);

  function getClose() {
    const closeTodo = document.createElement("div");
    closeTodo.className = "todo-close";
    wrapperCloseAndDate.append(closeTodo);
    const btnCloseTodo = document.createElement("span");
    btnCloseTodo.className = "btn-close";
    closeTodo.append(btnCloseTodo);

    btnCloseTodo.addEventListener("click", () => {
      wrapperTodoItem.style.backgroundColor = "pink";
      setTimeout(() => wrapperTodoItem.remove(), 1000);
    });
  }
  getClose();

  const dateTodo = document.createElement("div");
  dateTodo.className = "todo-date";
  wrapperCloseAndDate.append(dateTodo);
  dateTodo.append(getDate());
});

btnDeleteAll.addEventListener("click", () => {
  listTodo.innerHTML = "";
});
