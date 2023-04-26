// Imports
import { taskArray } from "./data";
import { format } from "date-fns";

// Buttons
document.getElementById("add-task-button").addEventListener("click", toggleAddTaskDialog);

// Toggle dialogs
function toggleAddTaskDialog() {
    if (document.getElementById("add-task-dialog").open) {
        document.getElementById("add-task-dialog").close();
    } else {
        document.getElementById("add-task-dialog").showModal();
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

        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("num", taskArray.indexOf(task));
        document.getElementById(task.quadrant).appendChild(taskDiv);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        let checkboxID = "check" + taskArray.indexOf(task);
        checkbox.setAttribute("id", checkboxID);
        taskDiv.appendChild(checkbox);

        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", checkboxID);
        taskDiv.appendChild(checkboxLabel);
            const title = document.createElement("h3");
            title.textContent = `${task.title}`;
            checkboxLabel.appendChild(title);

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        taskDiv.appendChild(editButton);

            const editIcon = document.createElement("span");
            editIcon.classList.add("material-icons-round");
            editIcon.innerText = "edit";
            editButton.appendChild(editIcon);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        taskDiv.appendChild(deleteButton);

            const deleteIcon = document.createElement("span");
            deleteIcon.classList.add("material-icons-round");
            deleteIcon.innerText = "delete_forever";
            deleteButton.appendChild(deleteIcon);

        if (task.deadline) {
            const deadlineDiv = document.createElement("div");
            deadlineDiv.classList.add("task-deadline");
            taskDiv.appendChild(deadlineDiv);

                const deadlineLabel = document.createElement("h4");
                deadlineLabel.textContent = "Deadline: ";
                deadlineDiv.appendChild(deadlineLabel);

                const deadline = deadlineDiv.appendChild(document.createElement("span"));
                const formattedDeadline = format(new Date(task.deadline), "iii, do LLL y");
                deadline.textContent = `${formattedDeadline}`;
        };

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
export { displayTasks, toggleAddTaskDialog };