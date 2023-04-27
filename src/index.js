// Imports
import { taskArray, addTask, orderByDeadline, editTask, deleteTask } from "./data";
import { toggleAddDialog, toggleEditDialog, displayTasks } from "./dom";

// Buttons
document.getElementById("add-task-button").addEventListener("click", toggleAddDialog);

document.getElementById("add-task-form").addEventListener("submit", addTaskWorkflow);
document.getElementById("edit-task-form").addEventListener("submit", editTaskWorkflow);

// New task
function addTaskWorkflow() {
    addTask();
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleAddDialog();
}

function editTaskWorkflow() {
    editTask(this);
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleEditDialog();
}

function deleteTaskWorkflow() {
    deleteTask(this);
    taskArray.sort(orderByDeadline);
    displayTasks();
}

export { deleteTaskWorkflow };