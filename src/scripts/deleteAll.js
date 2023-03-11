import { allTasks } from "./localStorage";
import { listItems } from "./components";
import { updateLocalStorage } from "./localStorage";
import { getCount } from "./getCount";
import { completedCount } from "./completedCount";

function deleteAllItems() {
  let question = confirm("You delete all task for ever!!!");
  if (question) {
    allTasks.splice(0);
    listItems.innerHTML = "";
    updateLocalStorage();
    getCount();
    completedCount();
  } else return;
}

export { deleteAllItems };
