import { allCompleted } from "./components";

function completedCount() {
  let completedCount = [];
  for (let completed of document.querySelectorAll(".checked")) {
    completedCount.push(completed);
  }
  allCompleted.textContent = completedCount.length;
}

export { completedCount };
