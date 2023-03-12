import { updateLocalStorage } from "./localStorage";
import { getCount } from "./getCount";
import { completedCount } from "./completedCount";
import { allTasks } from "./localStorage";

function deleteItem(event) {
  if (event.target.className != "btn-close") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));
  parent.remove();

  allTasks.forEach((item, index) => {
    id === item.id ? allTasks.splice(index, 1) : null;
  });

  updateLocalStorage();
  getCount();
  completedCount();
}

export { deleteItem };
