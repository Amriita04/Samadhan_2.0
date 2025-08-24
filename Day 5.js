const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample student data
const students = [
  { id: 1, name: 'Arush', grade: 'A' },
  { id: 2, name: 'Reem', grade: 'B+' },
  { id: 3, name: 'Ruhi', grade: 'A-' }
];

// GET route to return student list
app.get('/students', (req, res) => {
  res.json(students);
});

// Optional: POST route to add a new student
app.post('/students', (req, res) => {
  const newStudent = req.body;
  newStudent.id = students.length + 1;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Root route for friendly landing
app.get('/', (req, res) => {
  res.send('🎓 Welcome to the Student API! Use /students to GET or POST student data.');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

