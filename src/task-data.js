// Imports
import { format } from "date-fns";

// Task array
const taskArray = [];

// Factory function
const task = (title, deadline, deadlineParsed, deadlineFormatted, category, notes, urgency, importance, quadrant) => {
    return {title, deadline, deadlineParsed, deadlineFormatted, category, notes, urgency, importance, quadrant}
};

// Create new task
function addTask() {
    // Prevent page refresh on submit
    event.preventDefault();
    // Get properties from user input
    const title = document.getElementById("add-title").value;
    let deadline, deadlineParsed, deadlineFormatted;
    if (document.getElementById("add-deadline").value) {
    deadline = document.getElementById("add-deadline").value;
    deadlineParsed = Date.parse(deadline);
    deadlineFormatted = format(new Date(deadlineParsed), "iiii, do LLLL y");
    }
    const category = document.getElementById("add-category").value;
    const notes = document.getElementById("add-notes").value;
    let urgency;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("add-urgency")[i].checked) {
            urgency = document.getElementsByName("add-urgency")[i].value;
        }
    }
    let importance;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("add-importance")[i].checked) {
            importance = document.getElementsByName("add-importance")[i].value;
        }
    }
    // Determine quadrant
    let quadrant;
    if (urgency == 1) {
        if (importance == 1) {
            quadrant = "a";
        }
        else {
            quadrant = "c";
        }
    } else {
        if (importance == 1) {
            quadrant = "b";
        } else {
            quadrant = "d";
        }
    }
    // Create task object, add to array
    const newTask = task(title, deadline, deadlineParsed, deadlineFormatted, category, notes, urgency, importance, quadrant);
    taskArray.push(newTask);
};

// Order by deadline
function orderByDeadline(a, b) {
    if (a.deadline && b.deadline) {
        return a.deadline - b.deadline;
    } else if (!a.deadline) {
        return 1;
    } else {
        return -1;
    }
}

// Edit task
function editTask(a) {
    // Prevent page refresh on submit
    event.preventDefault();
    // Get properties from user input
    const title = document.getElementById("edit-title").value;

    let deadline, deadlineParsed, deadlineFormatted;

    if (document.getElementById("edit-deadline").value) {
    deadline = document.getElementById("edit-deadline").value;
    deadlineParsed = Date.parse(deadline);
    deadlineFormatted = format(new Date(deadlineParsed), "iiii, do LLLL y");
    }

    const category = document.getElementById("edit-category").value;
    const notes = document.getElementById("edit-notes").value;
    let urgency;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("edit-urgency")[i].checked) {
            urgency = document.getElementsByName("edit-urgency")[i].value;
        }
    }
    let importance;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("edit-importance")[i].checked) {
            importance = document.getElementsByName("edit-importance")[i].value;
        }
    }
    // Determine quadrant
    let quadrant;
    if (urgency == 1) {
        if (importance == 1) {
            quadrant = "a";
        }
        else {
            quadrant = "c";
        }
    } else {
        if (importance == 1) {
            quadrant = "b";
        } else {
            quadrant = "d";
        }
    }
    // Create task object, add to array
    const updatedTask = task(title, deadline, deadlineParsed, deadlineFormatted, category, notes, urgency, importance, quadrant);
    const index = a.getAttribute("num");
    taskArray.splice(index, 1, updatedTask);
    console.table(taskArray);
}

// Delete task
function deleteTask(a) {
    const index = a.parentNode.getAttribute("num");
    taskArray.splice(a, 1);
}

// Exports
export { taskArray, addTask, orderByDeadline, editTask, deleteTask };