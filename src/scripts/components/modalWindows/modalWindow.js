const container = document.getElementById("confirm-wrap-container");

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

function complete() {
  hideCover();
  container.style.display = "none";
}

function showModal(text) {
  showCover();
  let message = document.getElementById("confirm-message");
  let buttonOk = document.querySelector(".button-ok");
  let buttonCancel = document.querySelector(".button-cancel");

  message.innerHTML = text;

  buttonCancel.addEventListener("click", () => complete());

  document.addEventListener("keydown", function (e) {
    e.key == "Escape" ? complete() : null;
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

export { showModal, showCover, complete };
