//Imports
import { taskArray, addTask, orderByDeadline } from "./data";
import { toggleAddTaskDialog, displayTasks } from "./dom";

document.getElementById("add-task-form").addEventListener("submit", newTask);

function newTask() {
    addTask();
    taskArray.sort(orderByDeadline);
    displayTasks();
    toggleAddTaskDialog();
    console.table(taskArray);
}

