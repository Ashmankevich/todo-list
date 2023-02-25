export const root = document.getElementById("root");
export const container = document.createElement("div");
container.className = "container";
root.append(container);

export const mainItems = document.createElement("div");
mainItems.className = "wrapper main-items";
container.append(mainItems);

export const btnDeleteAll = document.createElement("button");
btnDeleteAll.className = "btn delete-all";
btnDeleteAll.textContent = "Delete All";
mainItems.append(btnDeleteAll);

export const btnDeleteLast = document.createElement("button");
btnDeleteLast.className = "btn delete-last";
btnDeleteLast.textContent = "Delete Last";
mainItems.append(btnDeleteLast);

export const inputEnterTODO = document.createElement("input");
inputEnterTODO.className = "input__enter-todo";
inputEnterTODO.setAttribute("placeholder", "Enter todo...");
mainItems.append(inputEnterTODO);

export const btnAdd = document.createElement("button");
btnAdd.className = "btn add";
btnAdd.textContent = "Add";
mainItems.append(btnAdd);

export const additionalItems = document.createElement("div");
additionalItems.className = "wrapper addition-items";
container.append(additionalItems);

export const divAllCount = document.createElement("div");
divAllCount.className = "wrapper__all-count";
additionalItems.append(divAllCount);

export const allCountName = document.createElement("p");
allCountName.className = "text-count-name";
allCountName.textContent = "All:";
divAllCount.append(allCountName);

export const allCount = document.createElement("p");
allCount.className = "text-all-count";
allCount.textContent = "0";
divAllCount.append(allCount);

export const completed = document.createElement("div");
completed.className = "wrapper__completed";
additionalItems.append(completed);

export const allCompletedName = document.createElement("p");
allCompletedName.className = "text-completed-name";
allCompletedName.textContent = "Completed:";
completed.append(allCompletedName);

export const allCompleted = document.createElement("p");
allCompleted.className = "text-all-completed";
allCompleted.textContent = "2";
completed.append(allCompleted);

export const btnShowAll = document.createElement("button");
btnShowAll.className = "btn show-all";
btnShowAll.textContent = "Show All";
additionalItems.append(btnShowAll);

export const btnShowCompleted = document.createElement("button");
btnShowCompleted.className = "btn show-completed";
btnShowCompleted.textContent = "Show Completed";
additionalItems.append(btnShowCompleted);

export const inputSearchTODO = document.createElement("input");
inputSearchTODO.className = "input__search-todo";
inputSearchTODO.setAttribute("placeholder", "Search...");
additionalItems.append(inputSearchTODO);

export const listTodo = document.createElement("div");
listTodo.className = "wrapper list-todo";
container.append(listTodo);
