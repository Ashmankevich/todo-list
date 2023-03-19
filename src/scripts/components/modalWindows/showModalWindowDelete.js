import { showModal } from "./modalWindow";
import { deleteAllItems } from "../buttons/deleteAll";
import { complete } from "./modalWindow";

function showModalWindowDelete() {
  showModal("You delete all items for ever. Are you sure?");

  document.querySelector(".button__ok").addEventListener("click", () => {
    deleteAllItems();
    complete();
  });
}

export { showModalWindowDelete };
