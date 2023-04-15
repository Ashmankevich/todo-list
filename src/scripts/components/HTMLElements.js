export const root = document.getElementById("root");
export const container = document.createElement("div");
container.className = "container";
root.append(container);

export const row = document.createElement("div");
row.className = "row";
container.append(row);

export const mainItems = document.createElement("div");
mainItems.className = "wrapper main-items";
row.append(mainItems);

export const deleteAll = document.createElement("button");
deleteAll.className = "btn delete-all";
deleteAll.textContent = "Delete All";
mainItems.append(deleteAll);

export const deleteLast = document.createElement("button");
deleteLast.className = "btn delete-last";
deleteLast.textContent = "Delete Last";
mainItems.append(deleteLast);

export const enterItem = document.createElement("input");
enterItem.className = "input-enter-todo";
enterItem.setAttribute("placeholder", "Enter todo...");
mainItems.append(enterItem);

export const add = document.createElement("button");
add.className = "btn add";
add.textContent = "Add";
mainItems.append(add);

export const additionalItems = document.createElement("div");
additionalItems.className = "wrapper addition-items";
row.append(additionalItems);

export const divAllCount = document.createElement("div");
divAllCount.className = "all-count";
additionalItems.append(divAllCount);

export const allCountName = document.createElement("p");
allCountName.className = "text-count-name";
allCountName.textContent = "All";
divAllCount.append(allCountName);

export const allCount = document.createElement("p");
allCount.className = "text-all-count";
allCount.textContent = "0";
divAllCount.append(allCount);

export const completed = document.createElement("div");
completed.className = "completed";
additionalItems.append(completed);

export const allCompletedName = document.createElement("p");
allCompletedName.className = "text-completed-name";
allCompletedName.textContent = "Completed";
completed.append(allCompletedName);

export const allCompleted = document.createElement("p");
allCompleted.className = "text-all-completed";
allCompleted.textContent = "0";
completed.append(allCompleted);

export const hideCompleted = document.createElement("button");
hideCompleted.className = "btn hide-completed";
hideCompleted.textContent = "Hide";
additionalItems.append(hideCompleted);

export const showCompleted = document.createElement("button");
showCompleted.className = "btn show-completed";
showCompleted.textContent = "Show";
additionalItems.append(showCompleted);

export const wrapIcon = document.createElement("div");
wrapIcon.className = "wrap-search";
additionalItems.append(wrapIcon);
export const searchIcon = document.createElement("div");
searchIcon.className = "gg-search";
wrapIcon.append(searchIcon);

export const inputSearch = document.createElement("input");
inputSearch.className = "input-search-todo";
additionalItems.append(inputSearch);

export const closeSearch = document.createElement("div");
closeSearch.className = "todo-close";
closeSearch.classList.add("btn-search");
additionalItems.append(closeSearch);
export const btnCloseSearch = document.createElement("span");
btnCloseSearch.className = "btn-close";
btnCloseSearch.classList.add("icon");
closeSearch.append(btnCloseSearch);

export const listItems = document.createElement("ul");
listItems.className = "wrapper list-todo";
container.append(listItems);

export const modalWindowContainer = document.createElement("div");
modalWindowContainer.id = "confirm-wrap-container";
container.append(modalWindowContainer);

export const modalWindowWrap = document.createElement("div");
modalWindowWrap.id = "confirm-wrap";
modalWindowContainer.append(modalWindowWrap);

export const modalWindowMessage = document.createElement("p");
modalWindowMessage.id = "confirm-message";
modalWindowWrap.append(modalWindowMessage);

export const modalWindowOK = document.createElement("button");
modalWindowOK.type = "button";
modalWindowOK.className = "button-ok";
modalWindowOK.name = "ok";
modalWindowOK.textContent = "Ok";
modalWindowWrap.append(modalWindowOK);

export const modalWindowCancel = document.createElement("button");
modalWindowCancel.type = "button";
modalWindowCancel.className = "button-cancel";
modalWindowCancel.name = "cancel";
modalWindowCancel.textContent = "Cancel";
modalWindowWrap.append(modalWindowCancel);

export let alertAttentionContainer = document.createElement("div");
alertAttentionContainer.id = "alert-wrap-container";
container.append(alertAttentionContainer);

export let alertAttentionWrap = document.createElement("div");
alertAttentionWrap.id = "alert-wrap";
alertAttentionContainer.append(alertAttentionWrap);

export const closeAlert = document.createElement("div");
closeAlert.className = "todo-close";
alertAttentionWrap.append(closeAlert);
export const btnCloseAlert = document.createElement("span");
btnCloseAlert.className = "btn-close";
btnCloseAlert.classList.add("alert");
closeAlert.append(btnCloseAlert);

export let alertAttentionMessage = document.createElement("p");
alertAttentionMessage.id = "alert-message";
alertAttentionWrap.append(alertAttentionMessage);
