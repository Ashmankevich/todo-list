import { renderTemplate } from "./addItem";
import { completedCount } from "./completedCount";
import { getCount } from "./getCount";

let allTasks;

function update() {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    renderTemplate();
    getCount();
    completedCount();
  }
}

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
