import {
  allCompleted,
  showCompleted,
  hideCompleted,
  allCount,
  deleteAll,
  deleteLast,
  inputSearch,
} from "./HTMLElements";
import { allTasks } from "../localStorage";

function completedCount() {
  let completedCount = [];
  for (let completed of document.querySelectorAll(".checked")) {
    completedCount.push(completed);
  }
  allCompleted.textContent = completedCount.length;
  if (allCompleted.textContent == 0) {
    hideCompleted.setAttribute("disabled", true);
    showCompleted.setAttribute("disabled", true);
  } else {
    hideCompleted.removeAttribute("disabled");
    showCompleted.removeAttribute("disabled");
  }
}

function getCount() {
  allCount.textContent = allTasks.length;
  if (allCount.textContent == 0) {
    deleteLast.setAttribute("disabled", false);
    deleteAll.setAttribute("disabled", false);
    inputSearch.setAttribute("disabled", false);
  } else {
    deleteLast.removeAttribute("disabled");
    deleteAll.removeAttribute("disabled");
    inputSearch.removeAttribute("disabled");
  }
}

export { completedCount, getCount };
