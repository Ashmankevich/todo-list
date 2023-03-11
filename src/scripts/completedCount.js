import { allCompleted, showCompleted } from "./components";
import { hideCompleted } from "./components";

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

export { completedCount };
