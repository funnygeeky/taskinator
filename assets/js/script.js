//When button is clicked a new task is added
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
//createTaskHandler() function will dynamically create the task item
// var createTaskHandler = function () {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// }
//The following button will use createTaskHandler function as the callback function.
buttonEl.addEventListener("click", createTaskHandler);
