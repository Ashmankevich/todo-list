import { allTasks } from "./localStorage";
import { allCount, deleteAll } from "./components";
import { deleteLast } from "./components";
import { deleteAll } from "./components";

function getCount() {
  allCount.textContent = allTasks.length;
  if (allCount.textContent == 0) {
    deleteLast.setAttribute("disabled", false);
    deleteAll.setAttribute("disabled", false);
  } else {
    deleteLast.removeAttribute("disabled");
    deleteAll.removeAttribute("disabled");
  }
}

export { getCount };
