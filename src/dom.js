// Imports
import { taskArray } from "./data";
import { deleteTaskWorkflow } from "./index";

// Toggle "add task" dialog, reset form when closing
function toggleAddDialog() {
    if (document.getElementById("add-task-dialog").open) {
        document.getElementById("add-task-dialog").close();
        document.getElementById("add-task-form").reset();
    } else {
        document.getElementById("add-task-dialog").showModal();
    }
}

// Toggle "edit task" dialog, reset form when closing
function toggleEditDialog() {
    if (document.getElementById("edit-task-dialog").open) {
        document.getElementById("edit-task-dialog").close();
        document.getElementById("edit-task-form").reset();
    } else {
        document.getElementById("edit-task-dialog").showModal();
        // Identify which task is being edited, set task index as form "num"
        const index = this.parentNode.getAttribute("num");
        const task = taskArray.at(index);
        const form = document.getElementById("edit-task-form")
        form.setAttribute("num", index);
        // Populate form
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
        // Get task index
        const index = taskArray.indexOf(task);
        // Container div
        const taskDiv = document.createElement("div");
        document.getElementById(task.quadrant).appendChild(taskDiv);
        taskDiv.setAttribute("num", index); // Set task index as div "num"
        // "Done" checkbox
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        let checkboxID = "check" + index;
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
        deleteButton.addEventListener("click", deleteTaskWorkflow);
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