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

function showPrompt(text) {
  showCover();
  let container = document.getElementById("confirm-wrap-container");
  let wrap = document.getElementById("confirm-wrap");
  let message = document.getElementById("confirm-message");
  message.innerHTML = text;

  function complete() {
    hideCover();
    container.style.display = "none";
    document.onkeydown = null;
  }

  wrap.ok.addEventListener("click", () => {
    deleteAllItems();
    complete();
  });

  wrap.cancel.addEventListener("click", () => complete(null));

  document.addEventListener("keydown", handlerKey);
  function handlerKey(e) {
    e.key == "Escape" ? complete(null) : null;
  }

  let lastElem = wrap.elements[wrap.elements.length - 1];
  let firstElem = wrap.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == "Tab" && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = "block";
}

function showModalWindow() {
  showPrompt("You delete all items for ever. Are you sure?");
}

export { showModalWindow };
