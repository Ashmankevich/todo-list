import { container } from "./container.js";
import { getDate } from "./date.js";
const root = document.getElementById("root");
/*const container = document.createElement("div");
container.className = "container";*/
root.append(container);

const mainItems = document.createElement("div");
mainItems.className = "wrapper main-items";
container.append(mainItems);

const btnDeleteAll = document.createElement("button");
btnDeleteAll.className = "btn delete-all";
btnDeleteAll.textContent = "Delete All";
mainItems.append(btnDeleteAll);

const btnDeleteLast = document.createElement("button");
btnDeleteLast.className = "btn delete-last";
btnDeleteLast.textContent = "Delete Last";
mainItems.append(btnDeleteLast);

const inputEnterTODO = document.createElement("input");
inputEnterTODO.className = "input__enter-todo";
inputEnterTODO.setAttribute("placeholder", "Enter todo...");
mainItems.append(inputEnterTODO);

const btnAdd = document.createElement("button");
btnAdd.className = "btn add";
btnAdd.textContent = "Add";
mainItems.append(btnAdd);

const additionalItems = document.createElement("div");
additionalItems.className = "wrapper addition-items";
container.append(additionalItems);

const divAllCount = document.createElement("div");
divAllCount.className = "wrapper__all-count";
additionalItems.append(divAllCount);
const allCountName = document.createElement("p");
allCountName.className = "text-count-name";
allCountName.textContent = "All:";
divAllCount.append(allCountName);
const allCount = document.createElement("p");
allCount.className = "text-all-count";
allCount.textContent = "0";
divAllCount.append(allCount);

const completed = document.createElement("div");
completed.className = "wrapper__completed";
additionalItems.append(completed);
const allCompletedName = document.createElement("p");
allCompletedName.className = "text-completed-name";
allCompletedName.textContent = "Completed:";
completed.append(allCompletedName);
const allCompleted = document.createElement("p");
allCompleted.className = "text-all-completed";
allCompleted.textContent = "2";
completed.append(allCompleted);

const btnShowAll = document.createElement("button");
btnShowAll.className = "btn show-all";
btnShowAll.textContent = "Show All";
additionalItems.append(btnShowAll);

const btnShowCompleted = document.createElement("button");
btnShowCompleted.className = "btn show-completed";
btnShowCompleted.textContent = "Show Completed";
additionalItems.append(btnShowCompleted);

const inputSearchTODO = document.createElement("input");
inputSearchTODO.className = "input__search-todo";
inputSearchTODO.setAttribute("placeholder", "Search...");
additionalItems.append(inputSearchTODO);

const listTodo = document.createElement("div");
listTodo.className = "wrapper list-todo";
container.append(listTodo);

function addTodoItem() {
  const wrapperTodoItem = document.createElement("div");
  wrapperTodoItem.className = "wrapper todo-item";
  listTodo.append(wrapperTodoItem);

  const btnDone = document.createElement("button");
  btnDone.className = "todo-btn-done";
  wrapperTodoItem.append(btnDone);

  const textTodo = document.createElement("input");
  textTodo.className = "todo-input";
  textTodo.setAttribute("placeholder", "Todo text...");
  wrapperTodoItem.append(textTodo);

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

  btnCloseTodo.addEventListener("click", removeItemTodo);

  function removeItemTodo() {
    wrapperTodoItem.style.backgroundColor = "pink";
    setTimeout(() => wrapperTodoItem.remove(), 1000);
  }
}

function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  return `${day}/${month}/${year} - ${hour}:${min}`;
}

btnAdd.addEventListener("click", addTodoItem);

function removeTodoList() {
  listTodo.innerHTML = "";
}

btnDeleteAll.addEventListener("click", removeTodoList);
