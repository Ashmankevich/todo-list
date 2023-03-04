import { allTasks } from "./localStorage";
import { allCount } from "./components";

function getCount() {
  allCount.textContent = "0";
  allCount.textContent = allTasks.length;
}

export { getCount };
