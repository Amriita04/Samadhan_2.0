const marks = [72, 88, 95, 67, 89];
let highest = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}
console.log("Highest marks:", highest);
