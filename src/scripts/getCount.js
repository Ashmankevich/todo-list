import { allTasks } from "./localStorage";
import { allCount } from "./components";

function getCount() {
  allCount.textContent = allTasks.length;
}

export { getCount };
