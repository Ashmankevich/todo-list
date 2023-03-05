function showItem() {
  for (let completed of document.querySelectorAll(".checked")) {
    completed.style.display = "flex";
  }
}

export { showItem };
