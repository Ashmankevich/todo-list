import {
  add,
  deleteAll,
  deleteLast,
  listItems,
  enterItem,
  showCompleted,
  hideCompleted,
  inputSearch,
} from "./components.js";
import { update } from "./localStorage";
import { hideItem } from "./hideItem";
import { showItem } from "./showItem";
import { search } from "./search";
import { deleteLastItem } from "./deleteLast";
import { deleteAllItems } from "./deleteAll";
import { addItem } from "./addItem";
import { pressedEnter } from "./addItem";
import { deleteItem } from "./deleteItem.js";
import { completeItem } from "./completeItem.js";

window.addEventListener("load", update);
add.addEventListener("click", addItem);
deleteAll.addEventListener("click", deleteAllItems);
deleteLast.addEventListener("click", deleteLastItem);
enterItem.addEventListener("keydown", pressedEnter);
listItems.addEventListener("click", deleteItem);
listItems.addEventListener("change", completeItem);
hideCompleted.addEventListener("click", hideItem);
showCompleted.addEventListener("click", showItem);
inputSearch.addEventListener("input", search);
