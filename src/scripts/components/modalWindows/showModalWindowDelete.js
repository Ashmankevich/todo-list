import { showModal } from "./modalWindow";
import { deleteAllItems } from "../buttons/deleteAll";
import { complete } from "./modalWindow";

function showModalWindowDelete() {
  showModal("You are going to delete all tasks. Are you sure?");

  let btnOK = document.querySelector(".button-ok");

  btnOK.addEventListener("click", () => {
    deleteAllItems();
    complete();
  });
}

export { showModalWindowDelete };
