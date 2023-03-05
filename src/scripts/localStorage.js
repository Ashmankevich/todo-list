import { renderTemplate } from ".";
import { getCount } from "./getCount";
import { completedCount } from "./completedCount";
import { hideItem } from "./hideItem";
import { showItem } from "./showItem";

let allTasks;

const update = () => {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    completedCount();
    hideItem();
    showItem();
    renderTemplate();
    getCount();
  }
};

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
