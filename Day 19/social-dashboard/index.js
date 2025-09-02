import express from "express";

const app = express();
app.use(express.json());

const students = [
  { id: 1, name: "Amrita", age: 21, grade: "A" },
  { id: 2, name: "Shikha", age: 20, grade: "B" },
  { id: 3, name: "Tanvi", age: 20, grade: "B" }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET one student
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  student ? res.json(student) : res.status(404).send("Student not found");
});

// POST new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("Student not found");

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.grade = req.body.grade || student.grade;

  res.json(student);
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Student not found");

  const deleted = students.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(3100, () => {
  console.log("Student API running on http://localhost:3100");
});
