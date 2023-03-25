function hideItem() {
  for (let completed of document.querySelectorAll(".item-complete")) {
    completed.style.display = "none";
  }
}

export { hideItem };
