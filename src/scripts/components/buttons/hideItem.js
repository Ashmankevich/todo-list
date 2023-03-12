function hideItem() {
  for (let completed of document.querySelectorAll(".checked")) {
    completed.style.display = "none";
  }
}

export { hideItem };
