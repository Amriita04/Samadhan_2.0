// Step 1: Import required modules
const express = require('express');
const cors = require('cors');

// Step 2: Create the Express app
const app = express();

// Step 3: Use middleware
app.use(cors());
app.use(express.json()); // Optional: if you're handling POST requests

// Step 4: Define your data
const students = [
  { id: 1, name: 'Amrita Pal', course: 'AI & ML' },
  { id: 2, name: 'Siddharth Roy', course: 'Psychology' },
];

// Step 5: Create your route
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Step 6: Start the server
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('http://localhost:3500/api/students')
});
