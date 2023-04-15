import { inputSearch } from "../HTMLElements";

function clearSearch() {
  inputSearch.value ? (inputSearch.value = " ") : null;

  let items = document.querySelectorAll(".todo-item");
  items.forEach((elem) => (elem.style.display = "flex"));

  let clearSearch = document.querySelector(".btn-search");
  clearSearch.style.display = "none";
}

export { clearSearch };
