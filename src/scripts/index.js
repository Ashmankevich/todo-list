import { getDate } from "./date";
import {
  add,
  deleteAll,
  deleteLast,
  listItems,
  enterItem,
} from "./components.js";
import { getTask } from "./getTask";
import { allTasks, updateLocalStorage } from "./localStorage";
import { update } from "./localStorage";

function addItem() {
  let isEmpty = !enterItem.value.trim();
  if (isEmpty) {
    alert("Enter something ...");
    enterItem.value = "";
  } else {
    allTasks.push(new getTask());
    updateLocalStorage();
    enterItem.value = "";
    renderTemplate();
  }
}

export function renderTemplate() {
  listItems.innerHTML = "";
  allTasks.forEach((item) => createTemplate(item));
}

function createTemplate(obj) {
  const wrapperTodoItem = document.createElement("li");
  wrapperTodoItem.className = "wrapper todo-item";
  wrapperTodoItem.setAttribute("id", obj.id);
  listItems.append(wrapperTodoItem);

  const textTodo = document.createElement("input");
  textTodo.className = "todo-input";
  textTodo.classList.add("complete"); //change it, try - toggle
  textTodo.setAttribute("type", "checkbox");
  textTodo.setAttribute("isChecked", obj.isChecked);
  wrapperTodoItem.append(textTodo);

  let description = document.createElement("p");
  description.className = "task_desc";
  description.textContent = obj.description;
  wrapperTodoItem.append(description);

  const wrapperCloseAndDate = document.createElement("div");
  wrapperCloseAndDate.className = "wrapper todo-close";
  wrapperTodoItem.append(wrapperCloseAndDate);

  const closeTodo = document.createElement("div");
  closeTodo.className = "todo-close";
  wrapperCloseAndDate.append(closeTodo);
  const btnCloseTodo = document.createElement("span");
  btnCloseTodo.className = "btn-close";
  closeTodo.append(btnCloseTodo);

  const dateTodo = document.createElement("div");
  dateTodo.className = "todo-date";
  wrapperCloseAndDate.append(dateTodo);
  dateTodo.append(getDate());
}

function deleteAllItems() {
  allTasks = [];
  listItems.innerHTML = "";
  updateLocalStorage();
}

function deleteLastItem() {
  allTasks.pop();
  renderTemplate();
  updateLocalStorage();
}

function pressedEnter(keyPressed) {
  keyPressed.key === "Enter" ? addItem() : null;
}

function deleteItem(event) {
  if (event.target.classList.contains("btn-close")) {
    let parent = event.target.parentElement.parentElement.parentElement;
    let id = Number(parent.getAttribute("id"));
    parent.remove();

    allTasks.forEach((item, index) =>
      id === item.id ? allTasks.splice(index, 1) : null
    );

    updateLocalStorage();
  }
}

window.addEventListener("load", update);
add.addEventListener("click", addItem);
deleteAll.addEventListener("click", deleteAllItems);
deleteLast.addEventListener("click", deleteLastItem);
enterItem.addEventListener("keydown", pressedEnter);
listItems.addEventListener("click", deleteItem);
