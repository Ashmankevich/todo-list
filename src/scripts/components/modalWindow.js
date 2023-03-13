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

/*<div id="prompt-form-container">
<form id="prompt-form">
  <div id="prompt-message"></div>
  <input type="submit" value="Ok">
  <input type="button" name="cancel" value="Отмена">
</form>
</div>*/

function showPrompt(text) {
  showCover();
  let container = document.getElementById("prompt-form-container");
  let form = document.getElementById("prompt-form");
  let message = document.getElementById("prompt-message");
  message.innerHTML = text;

  function complete() {
    hideCover();
    container.style.display = "none";
  }

  form.addEventListener("submit", handlerForm);
  function handlerForm() {
    deleteAllItems();
    let value = form.elements.textInput.value;
    if (!value == "") {
      complete(value);
    } else return false;
  }

  form.cancel.addEventListener("click", handlerCancel);
  function handlerCancel() {
    complete(null);
  }

  document.addEventListener("keydown", handlerKey);
  function handlerKey(e) {
    e.key == "Escape" ? complete(null) : null;
  }

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

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
