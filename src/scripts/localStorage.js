import { renderTemplate } from ".";
import { getCount } from "./getCount";

let allTasks;

const update = () => {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    renderTemplate();
    getCount();
  }
};

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
