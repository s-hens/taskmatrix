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

// Populate all areas of site with categories
// Including "add task" form, "edit task" form, and "delete category" form
function populateCats() {
    // Clear drop-down
    document.getElementById("add-category").innerHTML = "";
    document.getElementById("edit-category").innerHTML = "";
    document.getElementById("delete-cat").innerHTML = "";
    // Create "none" option
    const addNone = document.createElement("option");
    addNone.value = "";
    addNone.textContent = "None";
    document.getElementById("add-category").append(addNone);
    const editNone = document.createElement("option");
    editNone.value = "";
    editNone.textContent = "None";
    document.getElementById("edit-category").append(editNone);
    const deleteNone = document.createElement("option");
    deleteNone.value = "";
    deleteNone.textContent = "None";
    document.getElementById("delete-cat").append(deleteNone);
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
        const deleteCategory = document.createElement("option");
        deleteCategory.value = cat;
        deleteCategory.textContent = `${cat}`;
        document.getElementById("delete-cat").append(deleteCategory);
    });
}

// Exports
export { toggleCatsDialog, populateCats };