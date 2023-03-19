import { showModal } from "./modalWindow";
import { complete } from "./modalWindow";

function showModalWindowAttention() {
  showModal("If you want continue enter todo below...");

  document.querySelector(".button__ok").addEventListener("click", () => {
    complete();
  });
}

export { showModalWindowAttention };
