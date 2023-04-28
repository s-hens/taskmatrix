// Imports
import { taskArray, addTask, orderByDeadline, editTask, deleteTask } from "./task-data";
import { toggleAddDialog, toggleEditDialog, displayTasks } from "./task-dom";
import { toggleCatsDialog } from "./cats-dom"

// Event Listeners
document.getElementById("add-task-button").addEventListener("click", toggleAddDialog);
document.getElementById("cats-button").addEventListener("click", toggleCatsDialog);

document.getElementById("add-task-form").addEventListener("submit", addTaskWorkflow);
document.getElementById("edit-task-form").addEventListener("submit", editTaskWorkflow);

// Workflows
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

// Exports
export { deleteTaskWorkflow };