import { updateLocalStorage, allTasks } from "../../localStorage";
import { completedCount, getCount } from "../counters";

function deleteItem(event) {
  if (event.target.className != "btn-close") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));

  parent ? parent.classList.add("animation") : null;

  setTimeout(() => {
    parent.remove();
    allTasks.forEach((item, index) => {
      id === item.id ? allTasks.splice(index, 1) : null;
    });

    updateLocalStorage();
    getCount();
    completedCount();
  }, 500);
}

export { deleteItem };
