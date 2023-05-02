// Imports
import { taskArray, addTask, orderByDeadline, editTask, deleteTask, toggleDone } from "./task-data";
import { toggleAddDialog, toggleEditDialog, displayTasks } from "./task-dom";
import { catsArray, addCat, deleteCat } from "./cats-data";
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
document.getElementById("delete-cats-form").addEventListener("submit", deleteCatWorkflow);

// Workflows
function addTaskWorkflow() {
    addTask();
    taskArray.sort(orderByDeadline);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    displayTasks();
    toggleAddDialog();
}

function editTaskWorkflow() {
    editTask(this);
    taskArray.sort(orderByDeadline);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    displayTasks();
    toggleEditDialog();
}

function deleteTaskWorkflow() {
    deleteTask(this);
    taskArray.sort(orderByDeadline);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    displayTasks();
}

function toggleDoneWorkflow() {
    toggleDone(this);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    displayTasks();
}

function addCatWorkflow() {
    addCat();
    catsArray.sort();
    localStorage.setItem("catsArray", JSON.stringify(catsArray));
    toggleCatsDialog();
    populateCats();
}

function deleteCatWorkflow() {
    deleteCat();
    localStorage.setItem("catsArray", JSON.stringify(catsArray));
    toggleCatsDialog();
    populateCats();
    displayTasks();
}

// Populate page on load
displayTasks();
populateCats();

// Exports
export { deleteTaskWorkflow, toggleDoneWorkflow };