import { allTasks, updateLocalStorage } from "../../localStorage";
import { renderTemplate } from "./addItem";
import { completedCount, getCount } from "../counters";

function deleteLastItem() {
  allTasks.pop();
  renderTemplate();
  getCount();
  completedCount();
  updateLocalStorage();
}

export { deleteLastItem };
