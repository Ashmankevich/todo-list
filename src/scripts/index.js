import { getDate } from "./date";
import {
  add,
  deleteAll,
  deleteLast,
  listItems,
  enterItem,
  showCompleted,
  hideCompleted,
} from "./components.js";
import { getTask } from "./getTask";
import { allTasks, updateLocalStorage } from "./localStorage";
import { update } from "./localStorage";
import { getCount } from "./getCount";
import { hideItem } from "./hideItem";
import { showItem } from "./showItem";

function addItem() {
  let isEmpty = !enterItem.value.trim();
  if (isEmpty) {
    alert("Enter something ...");
  } else {
    allTasks.push(new getTask());
    updateLocalStorage();
    enterItem.value = "";
    renderTemplate();
    getCount();
  }
}

export function renderTemplate() {
  listItems.innerHTML = "";
  allTasks.forEach((item) => createTemplate(item));
}

function createTemplate(obj) {
  const wrapItem = document.createElement("li");
  wrapItem.className = "wrapper todo-item";
  wrapItem.setAttribute("id", obj.id);
  listItems.append(wrapItem);

  const input = document.createElement("input");
  input.className = "todo-input";
  input.setAttribute("type", "checkbox");
  input.setAttribute("isChecked", obj.isChecked);
  input.checked = obj.isChecked;

  obj.isChecked ? wrapItem.classList.toggle("checked") : null;

  wrapItem.append(input);

  let description = document.createElement("p");
  description.className = "task_desc";
  description.textContent = obj.description;
  wrapItem.append(description);

  const wrapperCloseAndDate = document.createElement("div");
  wrapperCloseAndDate.className = "wrapper todo-close";
  wrapItem.append(wrapperCloseAndDate);

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
  allTasks.splice(0);
  listItems.innerHTML = "";
  updateLocalStorage();
  getCount();
}

function deleteLastItem() {
  allTasks.pop();
  renderTemplate();
  updateLocalStorage();
  getCount();
}

function pressedEnter(keyPressed) {
  keyPressed.key === "Enter" ? addItem() : null;
}

function deleteItem(event) {
  if (event.target.className != "btn-close") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));
  parent.remove();

  allTasks.forEach((item, index) => {
    id === item.id ? allTasks.splice(index, 1) : null;
  });

  updateLocalStorage();
  getCount();
}

function completeItem(event) {
  if (event.target.className != "todo-input") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));

  event.target.checked
    ? parent.classList.add("checked")
    : parent.classList.remove("checked");

  allTasks.forEach((item) => {
    id === item.id ? (item.isChecked = !item.isChecked) : null;
  });
  completedCount();
  updateLocalStorage();
}

hideItem();
showItem();

window.addEventListener("load", update);
add.addEventListener("click", addItem);
deleteAll.addEventListener("click", deleteAllItems);
deleteLast.addEventListener("click", deleteLastItem);
enterItem.addEventListener("keydown", pressedEnter);
listItems.addEventListener("click", deleteItem);
listItems.addEventListener("change", completeItem);
hideCompleted.addEventListener("click", hideItem);
showCompleted.addEventListener("click", showItem);
