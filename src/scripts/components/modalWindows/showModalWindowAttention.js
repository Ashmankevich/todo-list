import { showModal } from "./modalWindow";
import { complete } from "./modalWindow";

function showModalWindowAttention() {
  showModal("If you want to continue, enter the task in the box below...");

  document.querySelector(".button__ok").addEventListener("click", () => {
    complete();
  });
}

export { showModalWindowAttention };
