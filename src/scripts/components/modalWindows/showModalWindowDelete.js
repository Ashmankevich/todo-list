import { showModal, complete } from "./modalWindow";
import { deleteAllItems } from "../buttons/deleteAll";

function showModalWindowDelete() {
  showModal("You are going to delete all tasks. Are you sure?");

  let btnOK = document.querySelector(".button-ok");

  btnOK.addEventListener("click", () => {
    deleteAllItems();
    complete();
  });
}

export { showModalWindowDelete };
