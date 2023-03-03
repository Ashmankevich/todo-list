import { renderTemplate } from ".";
let allTasks;

const update = () => {
  if (localStorage.allTasks === allTasks) {
    allTasks = [];
  } else {
    allTasks = JSON.parse(localStorage.getItem("allTasks"));
    renderTemplate();
  }
};

const updateLocalStorage = () =>
  localStorage.setItem("allTasks", JSON.stringify(allTasks));

export { allTasks, update, updateLocalStorage };
