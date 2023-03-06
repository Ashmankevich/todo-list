import { renderTemplate } from ".";
import { completedCount } from "./completedCount";
import { getCount } from "./getCount";
import { hideItem } from "./hideItem";

let allTasks;

function update() {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    renderTemplate();
    getCount();
    completedCount();
    completedCount() != false ? hideItem() : null;
  }
}

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
