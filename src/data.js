// Task array
const taskArray = [];

// Factory function
const task = (title, category, deadline, notes, urgency, importance, quadrant) => {
    return {title, category, deadline, notes, urgency, importance, quadrant};
};

// Create new task
function addTask() {
    // Prevent page refresh on submit
    event.preventDefault();
    // Get properties from user input
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const deadline = document.getElementById("deadline").value;
    const notes = document.getElementById("notes").value;
    let urgency;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("urgency")[i].checked) {
            urgency = document.getElementsByName("urgency")[i].value;
        }
    };
    let importance;
    for (let i = 0; i < 2; i++) {
        if (document.getElementsByName("importance")[i].checked) {
            importance = document.getElementsByName("importance")[i].value;
        }
    };
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
    };
    // Create task object
    const newTask = task(title, category, deadline, notes, urgency, importance, quadrant);
    // Add to array
    taskArray.push(newTask);
    console.log(taskArray);
};

// Export
export {addTask};