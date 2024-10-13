// Admin login and access control
const adminPassword = '12345';

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById('admin-password').value;
    if (enteredPassword === adminPassword) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
});

// Form submission event listener for adding new students
document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('student-name').value;
    const rollNumber = document.getElementById('student-roll-number').value;
    const marks = document.getElementById('student-marks').value;
    addStudent(name, rollNumber, marks);
    alert('Student added successfully!');
});

// Function to add a new student
function addStudent(name, rollNumber, marks) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name, rollNumber, marks });
    localStorage.setItem('students', JSON.stringify(students));
}

// Export to Excel function
document.getElementById('export-btn').addEventListener('click', function() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    if (students.length === 0) {
        alert('No student data available to export.');
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'StudentResults.xlsx');
});
