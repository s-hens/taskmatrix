// Imports
import { taskArray, addTask, orderByDeadline, editTask } from "./data";
import { toggleAddDialog, displayTasks } from "./dom";

// Buttons
document.getElementById("add-task-button").addEventListener("click", toggleAddDialog);
document.getElementById("add-task-form").addEventListener("submit", newTask);

// New task
function newTask() {
    addTask();
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleAddDialog();
    console.table(taskArray);
}