//console.log("OK");

const toDos = [];

/**
 *
 * @param {string} title
 */
function addToDo(title) {
  if (title.length <= 0) {
    return;
  }
  if (title.length > 20) {
    return;
  }

  const newToDo = { title: title, isComplete: false };
  toDos.push(newToDo);
}

function removeToDoByID(id) {}

function editToDoByID(id, updatedInfo) {}

function completeToDoByID(id) {}

const todoListElement = document.querySelector("#todoList");
const inputField = document.querySelector("input");
const buttonElement = todoListElement.querySelector("button");
const listDisplay = todoListElement.querySelector("ul");

function handleAddToDo() {
  //Les av input
  const inputValue = inputField.value;

  //legg til i listen
  addToDo(inputValue);
  //oppdater HTML
  const newToDo = addToDo(inputValue);

  const newToDoElement = document.createElement("li");
  newToDoElement.textContent = newToDo.title;
  console.log(newToDoElement);
  //console.log(toDos);
  listDisplay.append(newToDoElement);
}

buttonElement.addEventListener("click", handleAddToDo);
