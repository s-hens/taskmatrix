// Imports
import { taskArray, addTask, orderByDeadline, editTask } from "./data";
import { toggleAddDialog, toggleEditDialog, displayTasks } from "./dom";

// Buttons
document.getElementById("add-task-button").addEventListener("click", toggleAddDialog);
document.getElementById("add-task-form").addEventListener("submit", newTask);

// New task
function newTask() {
    addTask();
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleAddDialog();
    //console.table(taskArray);
}

function tryThis() {
    //console.log(this);
    editTask(this);
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleEditDialog();
    //console.table(taskArray);
}


document.getElementById("edit-task-form").addEventListener("submit", tryThis);