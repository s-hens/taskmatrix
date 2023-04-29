// Imports
import { taskArray } from "./task-data";

// Category array
const catsArray = [];

// Add new category
function addCat() {
    event.preventDefault();
    const newCat = document.getElementById("new-cat").value;
    catsArray.push(newCat);
}

// Delete category
function deleteCat() {
    event.preventDefault();
    const catToDelete = document.getElementById("delete-cat").value;
    catsArray.splice((catsArray.indexOf(catToDelete)), 1);

    taskArray.forEach(task => {
        if (task.category == catToDelete) {
            task.category = "";
        }
    })
}

// Exports
export { catsArray, addCat, deleteCat };