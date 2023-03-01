let allTasks;

localStorage.allTasks === allTasks
  ? (allTasks = [])
  : (allTasks = JSON.parse(localStorage.getItem("allTasks")));

function updateLocalStorage() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

export { allTasks, updateLocalStorage };
