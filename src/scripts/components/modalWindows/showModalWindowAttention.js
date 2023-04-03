import { showCover } from "./modalWindow";

const container = document.getElementById("alert-wrap-container");

function complete() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
  container.style.display = "none";
}

function showModalWindowAttention(text) {
  showCover();
  let message = document.getElementById("alert-message");
  let btnClose = document.querySelector(".btn-close");

  message.innerHTML = text;

  btnClose.addEventListener("click", () => complete());

  container.addEventListener("click", () => complete());

  container.style.display = "block";
}

export { showModalWindowAttention };
