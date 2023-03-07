function search() {
  let value = this.value.trim();
  let items = document.querySelectorAll(".todo-item");
  if (value != "") {
    items.forEach((elem) => {
      elem.innerText.search(value) == -1 ? (elem.style.display = "none") : null;
    });
  } else {
    items.forEach((elem) => {
      elem.innerText.search(value) == -1 ? (elem.style.display = "flex") : null;
    });
  }
}

export { search };
