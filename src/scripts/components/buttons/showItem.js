function showItem() {
  for (let completed of document.querySelectorAll(".item-complete")) {
    completed.style.display = "flex";
  }
}

export { showItem };
