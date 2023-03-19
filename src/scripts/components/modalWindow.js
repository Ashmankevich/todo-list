import { deleteAllItems } from "./buttons/deleteAll";

function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";
  document.body.style.overflowY = "hidden";
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
}

function showModal(text) {
  showCover();
  let container = document.getElementById("confirm-wrap-container");
  let message = document.getElementById("confirm-message");
  let buttonOk = document.querySelector(".button__ok");
  let buttonCancel = document.querySelector(".button__cancel");

  message.innerHTML = text;

  function complete() {
    hideCover();
    container.style.display = "none";
    document.onkeydown = null;
  }

  buttonOk.addEventListener("click", () => {
    deleteAllItems();
    complete();
  });

  buttonCancel.addEventListener("click", () => complete(null));

  document.addEventListener("keydown", function (e) {
    e.key == "Escape" ? complete(null) : null;
  });

  buttonOk.onkeydown = function (e) {
    if (e.key == "Tab" && e.shiftKey) {
      buttonCancel.focus();
      return false;
    }
  };

  buttonCancel.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      buttonOk.focus();
      return false;
    }
  };

  container.style.display = "block";
}

function showModalWindow() {
  showModal("You delete all items for ever. Are you sure?");
}

export { showModalWindow };
