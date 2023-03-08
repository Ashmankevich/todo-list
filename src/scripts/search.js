import { renderTemplate } from ".";

function search() {
  let value = this.value.trim().toLowerCase();
  let items = document.querySelectorAll(".todo-item");
  if (value != "") {
    items.forEach((elem) => {
      elem.textContent.toLowerCase().search(value) == -1
        ? (elem.style.display = "none")
        : null;
    });
  } else {
    items.forEach((elem) => {
      elem.textContent.toLowerCase().search(value) == -1
        ? (elem.style.display = "flex")
        : null;
    });
    renderTemplate();
  }
}

export { search };
