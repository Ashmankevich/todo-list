function search() {
  let valueSearch = this.value.trim().toLowerCase();
  let items = document.querySelectorAll(".todo-item");
  let clearSearch = document.querySelector(".btn-search");

  items.forEach((elem) => {
    elem.textContent.toLowerCase().indexOf(valueSearch) == -1
      ? (elem.style.display = "none")
      : (elem.style.display = "flex");
  });

  valueSearch != ""
    ? (clearSearch.style.display = "block")
    : (clearSearch.style.display = "none");
}

export { search };
