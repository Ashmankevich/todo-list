import { getDate } from "./date";
import {
  add,
  deleteAll,
  deleteLast,
  listItems,
  enterItem,
} from "./components.js";
import { getTask } from "./getTask";

let allTasks;

localStorage.allTasks === allTasks
  ? (allTasks = [])
  : (allTasks = JSON.parse(localStorage.getItem("allTasks")));

function updateLocalStorage() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

function addItem() {
  if (!enterItem.value.trim()) {
    alert("Enter something ...");
    enterItem.value = "";
    return;
  } else {
    allTasks.push(new getTask());
    updateLocalStorage();
    enterItem.value = "";
    renderTemplate();
  }
}

function renderTemplate() {
  listItems.innerHTML = "";
  allTasks.forEach((item) => {
    createTemplate(item);
  });
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
  btnCloseTodo.addEventListener("click", (e) => {
    wrapperTodoItem.style.backgroundColor = "pink";
    setTimeout(() => wrapperTodoItem.remove(), 1000);
    /*if (e.target.classList.contains("btn-close")) {
      let parent = e.target.parentElement;
      let id = +parent.getAttribute("id");
      wrapperTodoItem.remove();
      allTasks.forEach((item, index) => {
        if (id === item.id) {
          allTasks.splice(index, 1);
        }
      });

      updateLocalStorage();
    }*/
  });

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

add.addEventListener("click", addItem);
deleteAll.addEventListener("click", deleteAllItems);
deleteLast.addEventListener("click", deleteLastItem);
enterItem.addEventListener("keydown", pressedEnter);
