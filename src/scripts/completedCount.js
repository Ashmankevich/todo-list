import { allCompleted } from "./components";
import { hideCompleted } from "./components";

function completedCount() {
  let completedCount = [];
  for (let completed of document.querySelectorAll(".checked")) {
    completedCount.push(completed);
  }
  allCompleted.textContent = completedCount.length;
  allCompleted.textContent == 0
    ? hideCompleted.setAttribute("disabled", true)
    : hideCompleted.removeAttribute("disabled");
}

export { completedCount };
