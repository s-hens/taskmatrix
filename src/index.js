// Imports
import { taskArray, addTask, orderByDeadline, editTask, deleteTask } from "./task-data";
import { toggleAddDialog, toggleEditDialog, displayTasks } from "./task-dom";
import { catsArray, addCat } from "./cats-data";
import { toggleCatsDialog, populateCats } from "./cats-dom";

// Event Listeners
document.getElementById("add-task-button").addEventListener("click", toggleAddDialog);
document.getElementById("close-add-task-dialog").addEventListener("click", toggleAddDialog);

document.getElementById("close-edit-task-dialog").addEventListener("click", toggleEditDialog);

document.getElementById("cats-button").addEventListener("click", toggleCatsDialog);
document.getElementById("close-cats-dialog").addEventListener("click", toggleCatsDialog);

document.getElementById("add-task-form").addEventListener("submit", addTaskWorkflow);
document.getElementById("edit-task-form").addEventListener("submit", editTaskWorkflow);

document.getElementById("add-cats-form").addEventListener("submit", addCatWorkflow);

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

function addCatWorkflow() {
    addCat();
    catsArray.sort();
    toggleCatsDialog();
    populateCats();
    //console.table(catsArray);
}

// Exports
export { deleteTaskWorkflow };