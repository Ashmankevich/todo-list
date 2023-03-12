import { completedCount } from "./counters";
import { allTasks, updateLocalStorage } from "../localStorage";

function completeItem(event) {
  if (event.target.className != "todo-input") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));

  event.target.checked
    ? parent.classList.add("checked")
    : parent.classList.remove("checked");

  allTasks.forEach((item) => {
    id === item.id ? (item.isChecked = !item.isChecked) : null;
  });
  completedCount();
  updateLocalStorage();
}

export { completeItem };
