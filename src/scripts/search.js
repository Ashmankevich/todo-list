function search() {
  let valueSearch = this.value.trim().toLowerCase();
  let items = document.querySelectorAll(".todo-item");

  items.forEach((elem) => {
    elem.textContent.toLowerCase().indexOf(valueSearch) == -1
      ? (elem.style.display = "none")
      : (elem.style.display = "flex");
  });
}

export { search };
