import { allTasks } from "./localStorage";
import { renderTemplate } from ".";
import { getCount } from "./getCount";
import { completedCount } from "./completedCount";
import { updateLocalStorage } from "./localStorage";

function deleteLastItem() {
  allTasks.pop();
  renderTemplate();
  getCount();
  completedCount();
  updateLocalStorage();
}

export { deleteLastItem };
