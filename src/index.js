//Imports
import { taskArray, addTask, orderByDeadline } from "./data";

document.getElementById("add-task-form").addEventListener("submit", newTask);

function newTask() {
    addTask();
    taskArray.sort(orderByDeadline);
    console.table(taskArray);
}