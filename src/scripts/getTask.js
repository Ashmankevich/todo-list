import { enterItem } from "./components";

class getTask {
  constructor() {
    this.description = enterItem.value;
    this.isChecked = false;
    this.id = Date.now();
  }
}

export { getTask };
