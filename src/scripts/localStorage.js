import { renderTemplate } from ".";
import { getCount } from "./getCount";
import { completedCount } from "./completedCount";

let allTasks;

const update = () => {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    renderTemplate();
    getCount();
    completedCount();
  }
};

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
