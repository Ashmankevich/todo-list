import { completedCount } from "./counters";
import { allTasks, updateLocalStorage } from "../localStorage";
import { renderTemplate } from "./buttons/addItem";

function completeItem(event) {
  if (event.target.className != "todo-input") return;
  let parent = event.target.closest(".todo-item");
  let id = Number(parent.getAttribute("id"));
  let text = parent.querySelector(".task-desc");

  if (event.target.checked) {
    parent.classList.add("item-complete");
    text.classList.add("text-complete");
  } else {
    parent.classList.remove("item-complete");
    text.classList.remove("text-complete");
  }

  allTasks.forEach((item) => {
    id === item.id ? (item.isChecked = !item.isChecked) : null;
  });
  completedCount();
  renderTemplate();
  updateLocalStorage();
}

export { completeItem };
