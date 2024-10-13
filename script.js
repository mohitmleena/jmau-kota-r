 
const students = JSON.parse(localStorage.getItem('students')) || [];

// Function to display student result based on roll number
function displayResult(rollNumber) {
    const resultDisplay = document.getElementById('result-display');
    const student = students.find(s => s.rollNumber === rollNumber);
    if (student) {
        resultDisplay.innerHTML = `<p>Name: ${student.name}</p><p>Marks: ${student.marks}</p>`;
    } else {
        resultDisplay.innerHTML = `<p>No results found for roll number ${rollNumber}</p>`;
    }
}

// Form submission event listener for result display
document.getElementById('result-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const rollNumber = document.getElementById('roll-number').value;
    displayResult(rollNumber);
});
