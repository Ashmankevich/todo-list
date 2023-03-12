import { listItems } from "../HTMLElements";
import { updateLocalStorage, allTasks } from "../../localStorage";
import { completedCount, getCount } from "../counters";

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
