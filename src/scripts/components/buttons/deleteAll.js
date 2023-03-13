import { listItems } from "../HTMLElements";
import { updateLocalStorage, allTasks } from "../../localStorage";
import { completedCount, getCount } from "../counters";

function deleteAllItems() {
  allTasks.splice(0);
  listItems.innerHTML = "";
  updateLocalStorage();
  getCount();
  completedCount();
}

export { deleteAllItems };
