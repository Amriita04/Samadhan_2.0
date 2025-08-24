const student = {
  name: "Neha Pawar",
  marks: {
    math: 88,
    science: 92,
    english: 85
  }
};

function calculateMarks(student) {
  const subjects = Object.values(student.marks);
  const total = subjects.reduce((sum, mark) => sum + mark, 0);
  const average = total / subjects.length;

  console.log(`Student: ${student.name}`);
  console.log(`Total Marks: ${total}`);
  console.log(`Average Marks: ${average.toFixed(2)}`);
}

calculateMarks(student);
