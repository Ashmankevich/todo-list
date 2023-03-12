import { renderTemplate } from "./components/buttons/addItem";
import { completedCount, getCount } from "./components/counters";

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
