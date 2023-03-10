import { deleteAll } from "./components";
import { deleteLast } from "./components";

function unLock() {
  if (!document.querySelectorAll(".todo-item")) {
    deleteLast.removeAttribute("disabled");
    deleteAll.removeAttribute("disabled");
  } else {
    deleteLast.setAttribute("disabled", true);
    deleteAll.setAttribute("disabled", true);
  }
}

export { unLock };
