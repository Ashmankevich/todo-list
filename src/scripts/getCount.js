import { allTasks } from "./localStorage";
import { allCount, deleteAll, hideCompleted } from "./components";
import { deleteLast } from "./components";
import { deleteAll } from "./components";
import { hideCompleted } from "./components";

function getCount() {
  allCount.textContent = allTasks.length;
  if (allCount.textContent == 0) {
    deleteLast.setAttribute("disabled", true);
    deleteAll.setAttribute("disabled", true);
  } else {
    deleteLast.removeAttribute("disabled");
    deleteAll.removeAttribute("disabled");
  }
}

export { getCount };
