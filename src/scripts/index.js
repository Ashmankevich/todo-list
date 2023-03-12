import {
  add,
  deleteAll,
  deleteLast,
  listItems,
  enterItem,
  showCompleted,
  hideCompleted,
  inputSearch,
} from "../scripts/components/HTMLElements";
import { update } from "./localStorage";
import { hideItem } from "./components/buttons/hideItem";
import { showItem } from "./components/buttons/showItem";
import { search } from "./components/search";
import { deleteLastItem } from "./components/buttons/deleteLast";
import { deleteAllItems } from "./components/buttons/deleteAll";
import { addItem, pressedEnter } from "./components/buttons/addItem";
import { deleteItem } from "./components/buttons/deleteItem";
import { completeItem } from "./components/completeItem";

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
