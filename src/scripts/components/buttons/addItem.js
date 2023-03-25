import { enterItem, listItems } from "../HTMLElements";
import { allTasks, updateLocalStorage } from "../../localStorage";
import { getCount } from "../counters";
import { getDate } from "../date";
import { showModalWindowAttention } from "../modalWindows/showModalWindowAttention";

class getTask {
  constructor() {
    this.description = enterItem.value;
    this.isChecked = false;
    this.id = Date.now();
  }
}

function addItem() {
  let isEmpty = !enterItem.value.trim();
  if (isEmpty) {
    showModalWindowAttention();
  } else {
    allTasks.push(new getTask());
    updateLocalStorage();
    enterItem.value = "";
    renderTemplate();
    getCount();
  }
}

function pressedEnter(keyPressed) {
  keyPressed.key === "Enter" ? addItem() : null;
}

function renderTemplate() {
  listItems.innerHTML = "";
  allTasks.forEach((item) => createTemplate(item));
}

function createTemplate(obj) {
  const wrapItem = document.createElement("li");
  wrapItem.className = "wrapper todo-item";
  wrapItem.id = obj.id;
  listItems.append(wrapItem);

  const inputItem = document.createElement("input");
  inputItem.className = "todo-input";
  inputItem.type = "checkbox";
  inputItem.checked = obj.isChecked;

  const labelInputItem = document.createElement("label");
  labelInputItem.className = "custom-checkbox";

  obj.isChecked ? wrapItem.classList.toggle("item-complete") : null;

  wrapItem.append(labelInputItem);
  labelInputItem.append(inputItem);

  let description = document.createElement("span");
  description.className = "task-desc";
  description.textContent = obj.description;
  labelInputItem.append(description);

  obj.isChecked ? description.classList.toggle("text-complete") : null;

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

export { addItem, pressedEnter, renderTemplate };
