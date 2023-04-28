// Category array
const catsArray = [];

// Add new category
function addCat() {
    event.preventDefault();
    const newCat = document.getElementById("new-cat").value;
    catsArray.push(newCat);
}

// Exports
export { catsArray, addCat };