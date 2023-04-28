// Imports
import { catsArray } from "./cats-data";

// Toggle "manage categories" dialog, reset form when closing
function toggleCatsDialog() {
    if (document.getElementById("cats-dialog").open) {
        document.getElementById("cats-dialog").close();
        document.getElementById("add-cats-form").reset();
        document.getElementById("delete-cats-form").reset();
    } else {
        document.getElementById("cats-dialog").showModal();
    }
}

// Populate "categories" drop-down menu in "add task"/"edit task" dialogs
function populateCats() {
    // Clear drop-down
    document.getElementById("add-category").innerHTML = "";
    document.getElementById("edit-category").innerHTML = "";
    // Create "none" option
    const addNone = document.createElement("option");
    addNone.value = "";
    addNone.textContent = "None";
    document.getElementById("add-category").append(addNone);
    const editNone = document.createElement("option");
    editNone.value = "";
    editNone.textContent = "None";
    document.getElementById("edit-category").append(editNone);
    // Populate drop-down
    catsArray.forEach(cat => {
        const addCategory = document.createElement("option");
        addCategory.value = cat;
        addCategory.textContent = `${cat}`;
        document.getElementById("add-category").append(addCategory);
        const editCategory = document.createElement("option");
        editCategory.value = cat;
        editCategory.textContent = `${cat}`;
        document.getElementById("edit-category").append(editCategory);
    });
}

// Exports
export { toggleCatsDialog, populateCats };