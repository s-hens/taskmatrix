// Imports
import { taskArray } from "./data";

// Toggle "add task" dialog
function toggleAddDialog() {
    if (document.getElementById("add-task-dialog").open) {
        document.getElementById("add-task-dialog").close();
    } else {
        document.getElementById("add-task-dialog").showModal();
    }
}

// Toggle "edit task" dialog
function toggleEditDialog() {
    if (document.getElementById("edit-task-dialog").open) {
        document.getElementById("edit-task-dialog").close();
    } else {
        document.getElementById("edit-task-dialog").showModal();
        // Populate form
        const index = this.parentNode.getAttribute("num");
        const task = taskArray.at(index);
        document.getElementById("edit-title").value = task.title;
        if (task.notes) {
            document.getElementById("edit-notes").value = task.notes;
        }
        if (task.deadline) {
            document.getElementById("edit-deadline").value = task.deadline;
        }
        if (task.category) {
            document.getElementById("edit-category").value = task.category;
        }
        const urgencyFieldset = document.getElementById("edit-urgency");
        urgencyFieldset.querySelector(`input[value="${task.urgency}"`).checked = true;
        const importanceFieldset = document.getElementById("edit-importance");
        importanceFieldset.querySelector(`input[value="${task.importance}"`).checked = true;
    }
}

// Display tasks on page
function displayTasks() {
    // Clear matrix
    document.getElementById("a").innerText = ``;
    document.getElementById("b").innerText = ``;
    document.getElementById("c").innerText = ``;
    document.getElementById("d").innerText = ``;
    // Repopulate matrix
    taskArray.forEach(task => {
        // Container div
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("num", taskArray.indexOf(task));
        document.getElementById(task.quadrant).appendChild(taskDiv);
        // "Done" checkbox
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        let checkboxID = "check" + taskArray.indexOf(task);
        checkbox.setAttribute("id", checkboxID);
        taskDiv.appendChild(checkbox);
        // Title
        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", checkboxID);
        taskDiv.appendChild(checkboxLabel);
            const title = document.createElement("h3");
            title.textContent = `${task.title}`;
            checkboxLabel.appendChild(title);
        // "Edit" button
        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        taskDiv.appendChild(editButton);
        editButton.addEventListener("click", toggleEditDialog);
            const editIcon = document.createElement("span");
            editIcon.classList.add("material-icons-round");
            editIcon.innerText = "edit";
            editButton.appendChild(editIcon);
        // "Delete" button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        taskDiv.appendChild(deleteButton);
            const deleteIcon = document.createElement("span");
            deleteIcon.classList.add("material-icons-round");
            deleteIcon.innerText = "delete_forever";
            deleteButton.appendChild(deleteIcon);
        // Deadline
        if (task.deadline) {
            const deadlineDiv = document.createElement("div");
            deadlineDiv.classList.add("task-deadline");
            taskDiv.appendChild(deadlineDiv);
                const deadlineLabel = document.createElement("h4");
                deadlineLabel.textContent = "Deadline: ";
                deadlineDiv.appendChild(deadlineLabel);
                const deadline = deadlineDiv.appendChild(document.createElement("span"));
                deadline.textContent = `${task.deadlineFormatted}`;
        };
        // Category
        if (task.category) {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("task-category");
            taskDiv.appendChild(categoryDiv);
                const categoryLabel = document.createElement("h4");
                categoryLabel.textContent = "Category: ";
                categoryDiv.appendChild(categoryLabel);
                const category = categoryDiv.appendChild(document.createElement("span"));
                category.textContent = `${task.category}`;
        };
        // Notes
        if (task.notes) {
            const notesDiv = document.createElement("div");
            notesDiv.classList.add("task-notes");
            taskDiv.appendChild(notesDiv);
                const notesLabel = document.createElement("h4");
                notesLabel.textContent = "Notes: ";
                notesDiv.appendChild(notesLabel);
                const notes = notesDiv.appendChild(document.createElement("span"));
                notes.textContent = `${task.notes}`;
        };

    });
}

// Exports
export { toggleAddDialog, toggleEditDialog, displayTasks };