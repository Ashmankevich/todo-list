import { getDate } from "./date";
import {
  btnAdd,
  btnDeleteAll,
  listTodo,
  inputEnterTODO,
} from "./components.js";

let allTasks;

localStorage.allTasks === allTasks
  ? (allTasks = [])
  : (allTasks = JSON.parse(localStorage.getItem("allTasks")));

function updateLocalStorage() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

// try below function later
/*function getTask(description) {
  this.description = description;
  this.isChecked = false;
  this.id = Date.now();
}*/

function addItem() {
  if (!inputEnterTODO.value.trim()) {
    alert("Enter something ...");
    inputEnterTODO.value = "";
    return;
  } else {
    allTasks.push({
      id: Date.now(),
      isChecked: false,
      text: inputEnterTODO.value,
    });
    updateLocalStorage();
    inputEnterTODO.value = "";
    renderTemplate();
  }
}

function renderTemplate() {
  listTodo.innerHTML = "";
  allTasks.forEach((item) => {
    createTemplate(item);
  });
}

function createTemplate(obj) {
  const wrapperTodoItem = document.createElement("li");
  wrapperTodoItem.className = "wrapper todo-item";
  wrapperTodoItem.setAttribute("id", obj.id);
  listTodo.append(wrapperTodoItem);

  const textTodo = document.createElement("input");
  textTodo.className = "todo-input";
  textTodo.classList.add("complete"); //change it, try - toggle
  textTodo.setAttribute("type", "checkbox");
  textTodo.setAttribute("isChecked", obj.isChecked);
  wrapperTodoItem.append(textTodo);

  let description = document.createElement("p");
  description.className = "task_desc";
  description.textContent = obj.text;
  wrapperTodoItem.append(description);

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
}

function deleteAllItems() {
  allTasks = [];
  listTodo.innerHTML = "";
  updateLocalStorage();
}

btnAdd.addEventListener("click", addItem);
btnDeleteAll.addEventListener("click", deleteAllItems);
